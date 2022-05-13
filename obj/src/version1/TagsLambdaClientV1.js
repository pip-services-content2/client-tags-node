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
exports.TagsLambdaClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_aws_nodex_1 = require("pip-services3-aws-nodex");
class TagsLambdaClientV1 extends pip_services3_aws_nodex_1.CommandableLambdaClient {
    constructor(config) {
        super('tags');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getTags(correlationId, partyId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'tags.get_tags');
            try {
                return yield this.callCommand('get_tags', correlationId, {
                    party_id: partyId
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    setTags(correlationId, partyTags) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'tags.set_tags');
            try {
                return yield this.callCommand('set_tags', correlationId, {
                    party_tags: partyTags
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    recordTags(correlationId, partyId, tags) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'tags.record_tags');
            try {
                return yield this.callCommand('record_tags', correlationId, {
                    party_id: partyId,
                    tags: tags
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.TagsLambdaClientV1 = TagsLambdaClientV1;
//# sourceMappingURL=TagsLambdaClientV1.js.map