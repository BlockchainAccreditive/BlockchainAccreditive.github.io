// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IOracle {
    function getDocumentVerificationStatus(bytes32 documentHash) external view returns (bool);
}

contract DocumentVerificationOracle is IOracle {
    address public owner;  // Адрес владельца контракта
    mapping(bytes32 => bool) public documentStatuses; // Статусы документов по их хэшам

    event DocumentStatusUpdated(bytes32 indexed documentHash, bool isVerified);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

                            // Инициализация владельца контракта
    constructor() {
        owner = msg.sender; // Устанавливаем владельца контракта
    }

     // Функция для обновления статуса документа (только владелец может обновлять)
    function updateDocumentStatus(bytes32 documentHash, bool isVerified) external onlyOwner {
        documentStatuses[documentHash] = isVerified;
        emit DocumentStatusUpdated(documentHash, isVerified);
    }
    // Вспомогательная функция для проверки, был ли документ в базе данных
    function isDocumentVerified(bytes32 documentHash) external view returns (bool) {
        return documentStatuses[documentHash];
    }
    // Функция для проверки статуса документа
    function getDocumentVerificationStatus(bytes32 documentHash) external view override returns (bool) {
        return documentStatuses[documentHash];
    }

    // Функция для изменения владельца контракта
    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "New owner is the zero address");
        owner = newOwner;
    }


}
