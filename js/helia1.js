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

        async function addBytes() {
            const content = document.getElementById("contentToAdd").value;
            if (!content) return alert("Please enter content.");
            try {
                const cid = await heliaFs.addBytes(
                    new TextEncoder().encode(content)
                );
                document.getElementById("lastAddedCid").innerText = cid.toString();
                addToLog(`Bytes added with CID: ${cid}`);
            } catch (error) {
                console.error("Error adding bytes:", error);
            }
        }

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
