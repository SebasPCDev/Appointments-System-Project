"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putAppoStatus = exports.postNewAppo = exports.getAppoById = exports.getAllAppo = exports.postLogIn = exports.postNewUser = exports.getUserById = exports.getAllUsers = void 0;
//* Users
var getAllUsers_1 = require("./Users/getAllUsers");
Object.defineProperty(exports, "getAllUsers", { enumerable: true, get: function () { return __importDefault(getAllUsers_1).default; } });
var getUserById_1 = require("./Users/getUserById");
Object.defineProperty(exports, "getUserById", { enumerable: true, get: function () { return __importDefault(getUserById_1).default; } });
var postNewUser_1 = require("./Users/postNewUser");
Object.defineProperty(exports, "postNewUser", { enumerable: true, get: function () { return __importDefault(postNewUser_1).default; } });
var postLogIn_1 = require("./Users/postLogIn");
Object.defineProperty(exports, "postLogIn", { enumerable: true, get: function () { return __importDefault(postLogIn_1).default; } });
//*Appointments
var getAllAppo_1 = require("./Appointments/getAllAppo");
Object.defineProperty(exports, "getAllAppo", { enumerable: true, get: function () { return __importDefault(getAllAppo_1).default; } });
var getAppoById_1 = require("./Appointments/getAppoById");
Object.defineProperty(exports, "getAppoById", { enumerable: true, get: function () { return __importDefault(getAppoById_1).default; } });
var postNewAppo_1 = require("./Appointments/postNewAppo");
Object.defineProperty(exports, "postNewAppo", { enumerable: true, get: function () { return __importDefault(postNewAppo_1).default; } });
var putAppoStatus_1 = require("./Appointments/putAppoStatus");
Object.defineProperty(exports, "putAppoStatus", { enumerable: true, get: function () { return __importDefault(putAppoStatus_1).default; } });
