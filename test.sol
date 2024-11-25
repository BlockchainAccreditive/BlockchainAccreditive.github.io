// - **Банки** — обслуживают финансовую часть и гарантируют аккредитив.
// - **Импортеры** — инициируют аккредитив.
// - **Экспортеры** — получают оплату по аккредитиву.
// - **Оракулы** — для проверки внешних данных, таких как подтверждение выполнения условий аккредитива.

// Дополнительно, будет возможность загружать документы, и их проверка с использованием оракулов.
// Пример кода:
// ```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

// Интерфейсы для взаимодействия с оракулами
interface IOracle {
    function getDocumentVerificationStatus(bytes32 documentHash) external view returns (bool);
}

// Главный смарт-контракт для аккредитива
contract LetterOfCredit {

    address public importer; // Импортер
    address public exporter; // Экспортер
    address public bank;     // Банк
    address public oracle;   // Оракул для проверки документов

    enum Status { Created, Active, Fulfilled, Expired } // Статус аккредитива
    Status public status; // Текущий статус аккредитива

    uint256 public expiryDate; // Срок действия аккредитива
    uint256 public amount; // Сумма аккредитива
    mapping(bytes32 => bool) public documentsVerified; // Проверенные документы

    // События для логирования
    event LetterOfCreditCreated(address importer, address exporter, uint256 amount, uint256 expiryDate);
    event LetterOfCreditActivated();
    event LetterOfCreditFulfilled();
    event LetterOfCreditExpired();
    event DocumentVerified(bytes32 documentHash, bool isVerified);

    // Модификатор, чтобы только банк мог вызывать определенные функции
    modifier onlyBank() {
        require(msg.sender == bank, "Only the bank can call this function");
        _;
    }

    // Модификатор для проверки статуса аккредитива
    modifier onlyIfActive() {
        require(status == Status.Active, "Letter of Credit is not active");
        _;
    }

    // Модификатор для проверки, что аккредитив еще не истек
    modifier onlyBeforeExpiry() {
        require(block.timestamp < expiryDate, "Letter of Credit has expired");
        _;
    }

    // Инициализация аккредитива
    constructor(address _importer, address _exporter, uint256 _amount, uint256 _expiryDate, address _oracle) {
        importer = _importer;
        exporter = _exporter;
        amount = _amount;
        expiryDate = _expiryDate;
        oracle = _oracle;
        bank = msg.sender; // Изначально, банк создаёт аккредитив
        status = Status.Created; // Аккредитив только что создан
        emit LetterOfCreditCreated(_importer, _exporter, _amount, _expiryDate);
    }

    // Функция активации аккредитива (только банк может активировать)
    function activate() external onlyBank {
        require(status == Status.Created, "Letter of Credit is already active or fulfilled");
        require(block.timestamp < expiryDate, "Letter of Credit has expired");
        status = Status.Active;
        emit LetterOfCreditActivated();
    }

    // Функция для выполнения аккредитива (экспортер может запросить оплату, если выполнены условия)
    function fulfill(bytes32 documentHash) external onlyIfActive onlyBeforeExpiry {
        require(msg.sender == exporter, "Only exporter can fulfill the Letter of Credit");

        // Используем оракул для проверки документа
        bool isVerified = IOracle(oracle).getDocumentVerificationStatus(documentHash);
        require(isVerified, "Document verification failed");

        // Завершаем аккредитив
        status = Status.Fulfilled;
        emit LetterOfCreditFulfilled();

        // Выполняем оплату (предположительно, это перевод средств)
        payable(exporter).transfer(amount);
    }

    // Функция для проверки и загрузки документов
    function verifyDocument(bytes32 documentHash) external onlyBank {
        // Проверяем, был ли документ уже проверен
        bool isVerified = IOracle(oracle).getDocumentVerificationStatus(documentHash);
        documentsVerified[documentHash] = isVerified;

        // Логируем результат проверки документа
        emit DocumentVerified(documentHash, isVerified);
    }

    // Функция для обработки истечения срока действия аккредитива
    function checkExpiry() external {
        if (block.timestamp >= expiryDate && status == Status.Active) {
            status = Status.Expired;
            emit LetterOfCreditExpired();
        }
    }

    // Функция для получения информации о текущем статусе аккредитива
    function getStatus() external view returns (Status) {
        return status;
    }

    // Функция для получения информации о сумме аккредитива
    function getAmount() external view returns (uint256) {
        return amount;
    }

    // Функция для получения срока действия аккредитива
    function getExpiryDate() external view returns (uint256) {
        return expiryDate;
    }

    // Функция для получения информации о проверенных документах
    function isDocumentVerified(bytes32 documentHash) external view returns (bool) {
        return documentsVerified[documentHash];
    }

    // Функция для получения информации о пользователе (импортере, экспортере, банке)
    function getParties() external view returns (address, address, address) {
        return (importer, exporter, bank);
    }
}
```

// ### Пояснение к коду:

// 1. **Роли участников**:
//   - В контракте есть три роли: **банкир**, **импортер**, и **экспортер**. Только банк может активировать аккредитив и проверять документы.
//   - **Импортер** инициирует аккредитив, а **экспортер** может запросить исполнение аккредитива, предоставив необходимые документы.

// 2. **Статус аккредитива**:
//   - Аккредитив может быть в одном из следующих состояний: `Created` (создан), `Active` (активен), `Fulfilled` (исполнен), или `Expired` (истек).

// 3. **Проверка документов с помощью оракула**:
//   - При запросе выполнения аккредитива (функция `fulfill`) проверяется документ через интеграцию с оракулом, который проверяет подлинность документа и возвращает его статус.

// 4. **Управление сроком действия**:
//   - Функция `checkExpiry` позволяет проверить, истек ли срок действия аккредитива. Если срок истек, статус меняется на `Expired`.

// 5. **Загрузка и проверка документов**:
//   - Банки могут загрузить документ для проверки, который оракул должен подтвердить через функцию `verifyDocument`.

// ### Основные моменты:
// - Оракул должен быть внешним контрактом, который предоставляет функции для верификации документов. Это может быть реализовано с использованием внешних API.
// - Для реального использования этот контракт потребует дополнительной проверки безопасности, валидации и тестирования.

// Этот пример реализует основные функции DApp для работы с блокчейн-аккредитивами. Чтобы превратить это в полноценный DApp, нужно создать фронтенд-приложение, которое взаимодействует с этим смарт-контрактом через Web3.js или ethers.js.
