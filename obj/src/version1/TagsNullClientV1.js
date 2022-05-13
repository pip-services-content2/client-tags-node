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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsNullClientV1 = void 0;
const PartyTagsV1_1 = require("./PartyTagsV1");
class TagsNullClientV1 {
    getTags(correlationId, partyId) {
        return __awaiter(this, void 0, void 0, function* () {
            return new PartyTagsV1_1.PartyTagsV1(partyId, []);
        });
    }
    setTags(correlationId, partyTags) {
        return __awaiter(this, void 0, void 0, function* () {
            return partyTags;
        });
    }
    recordTags(correlationId, partyId, tags) {
        return __awaiter(this, void 0, void 0, function* () {
            return new PartyTagsV1_1.PartyTagsV1(partyId, []);
        });
    }
}
exports.TagsNullClientV1 = TagsNullClientV1;
//# sourceMappingURL=TagsNullClientV1.js.map