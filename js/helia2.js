/* global Helia, BlockstoreCore, DatastoreCore, HeliaUnixfs */

// HTML элементы для отображения состояния узла
const statusValueEl = document.getElementById('statusValue');
const discoveredPeerCountEl = document.getElementById('discoveredPeerCount');
const connectedPeerCountEl = document.getElementById('connectedPeerCount');
const connectedPeersListEl = document.getElementById('connectedPeersList');
const logEl = document.getElementById('runningLog');
const nodeIdEl = document.getElementById('nodeId');

let helia; // Основной экземпляр Helia
let heliaFs; // Экземпляр Helia UnixFS
let heliaInstance = null; // Для повторного использования Helia
window.discoveredPeers = new Map(); // Список обнаруженных пиров

document.addEventListener('DOMContentLoaded', async () => {
    // Инициализация Helia и UnixFS
    helia = window.helia = await instantiateHeliaNode();
    heliaFs = await HeliaUnixfs.unixfs(helia);

    // Получение Node ID и отображение
    const id = await helia.libp2p.peerId.toString();
    nodeIdEl.innerHTML = id;

    // Добавление обработчиков событий для обнаружения и подключения пиров
    helia.libp2p.addEventListener('peer:discovery', (evt) => {
        const peerId = evt.detail.id.toString();
        if (!window.discoveredPeers.has(peerId)) {
            window.discoveredPeers.set(peerId, evt.detail);
            updateDiscoveredPeers();
            addToLog(`Discovered peer ${peerId}`);
        }
    });

    helia.libp2p.addEventListener('peer:connect', (evt) => {
        addToLog(`Connected to ${evt.detail.toString()}`);
    });

    helia.libp2p.addEventListener('peer:disconnect', (evt) => {
        addToLog(`Disconnected from ${evt.detail.toString()}`);
    });

    // Обновление статуса узла и списка подключённых пиров
    setInterval(() => {
        statusValueEl.innerHTML = helia.libp2p.status === 'started' ? 'Online' : 'Offline';
        updateConnectedPeers();
    }, 500);
});

// Функция для добавления файла в IPFS
async function addFile() {
    const content = document.getElementById("contentToAdd").value;
    if (!content) return alert("Please enter content.");
    try {
        const cid = await heliaFs.addFile({
            content: new TextEncoder().encode(content),
        });
        document.getElementById("lastAddedCid").innerText = cid.toString();
        addToLog(`File added with CID: ${cid}`);
    } catch (error) {
        console.error("Error adding file:", error);
    }
}

// Функция для добавления байтов в IPFS
async function addBytes() {
    const content = document.getElementById("contentToAdd").value;
    if (!content) return alert("Please enter content.");
    try {
        const cid = await heliaFs.addBytes(new TextEncoder().encode(content));
        document.getElementById("lastAddedCid").innerText = cid.toString();
        addToLog(`Bytes added with CID: ${cid}`);
    } catch (error) {
        console.error("Error adding bytes:", error);
    }
}

// Функция для извлечения содержимого по CID
async function catFile() {
    const cid = document.getElementById("cidToRetrieve").value;
    if (!cid) return alert("Please enter a CID.");
    try {
        let content = "";
        for await (const chunk of heliaFs.cat(cid)) {
            content += new TextDecoder().decode(chunk);
        }
        document.getElementById("retrievedContent").innerText = content;
        addToLog(`Content retrieved for CID: ${cid}`);
    } catch (error) {
        console.error("Error retrieving content:", error);
    }
}

// Функция для отображения содержимого директории по CID
async function listDirectory() {
    const cid = document.getElementById("directoryCid").value;
    if (!cid) return alert("Please enter a directory CID.");
    const dirList = document.getElementById("directoryList");
    dirList.innerHTML = "";
    try {
        for await (const entry of heliaFs.ls(cid)) {
            const li = document.createElement("li");
            li.innerText = `${entry.name} (CID: ${entry.cid})`;
            dirList.appendChild(li);
        }
        addToLog(`Directory listed for CID: ${cid}`);
    } catch (error) {
        console.error("Error listing directory:", error);
    }
}

// Инициализация Helia узла
const instantiateHeliaNode = async () => {
    const datastore = new DatastoreCore.MemoryDatastore(); // Хранилище для данных
    const blockstore = new BlockstoreCore.MemoryBlockstore(); // Хранилище для блоков

    if (heliaInstance != null) {
        return heliaInstance;
    }

    heliaInstance = await Helia.createHelia({ datastore, blockstore });
    addToLog("Helia instance created.");
    return heliaInstance;
};

// Обновление списка подключённых пиров
function updateConnectedPeers() {
    const peers = helia.libp2p.getPeers();
    connectedPeerCountEl.innerHTML = peers.length;
    connectedPeersListEl.innerHTML = "";
    peers.forEach((peer) => {
        const li = document.createElement("li");
        li.innerText = peer.toString();
        connectedPeersListEl.appendChild(li);
    });
}

// Обновление счётчика обнаруженных пиров
function updateDiscoveredPeers() {
    discoveredPeerCountEl.innerHTML = window.discoveredPeers.size;
}

// Добавление записи в лог
function addToLog(message) {
    const logEl = document.getElementById("runningLog");
    const entry = document.createElement("div");
    entry.textContent = `${new Date().toLocaleTimeString()} - ${message}`;
    logEl.appendChild(entry);
}
