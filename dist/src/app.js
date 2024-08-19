"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contactsRoutes_1 = __importDefault(require("./routes/contactsRoutes"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
const authenticationRoutes_1 = __importDefault(require("./routes/authenticationRoutes"));
const app = (0, express_1.default)();
const port = 3000;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    app.use(express_1.default.json());
    app.use("/api", contactsRoutes_1.default);
    app.use("/api", usersRoutes_1.default);
    app.use("/api", authenticationRoutes_1.default);
    // Default route handler
    app.get("/", (req, res) => {
        res.send('Main');
    });
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
});
main();
//# sourceMappingURL=app.js.map