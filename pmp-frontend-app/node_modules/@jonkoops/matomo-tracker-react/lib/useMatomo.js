"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var MatomoContext_1 = __importDefault(require("./MatomoContext"));
var useOutboundClickListener_1 = __importDefault(require("./utils/useOutboundClickListener"));
function useMatomo() {
    var instance = (0, react_1.useContext)(MatomoContext_1.default);
    var trackPageView = (0, react_1.useCallback)(function (params) { return instance === null || instance === void 0 ? void 0 : instance.trackPageView(params); }, [instance]);
    var trackEvent = (0, react_1.useCallback)(function (params) { return instance === null || instance === void 0 ? void 0 : instance.trackEvent(params); }, [instance]);
    var trackEvents = (0, react_1.useCallback)(function () { return instance === null || instance === void 0 ? void 0 : instance.trackEvents(); }, [instance]);
    var trackSiteSearch = (0, react_1.useCallback)(function (params) { return instance === null || instance === void 0 ? void 0 : instance.trackSiteSearch(params); }, [instance]);
    var trackLink = (0, react_1.useCallback)(function (params) { return instance === null || instance === void 0 ? void 0 : instance.trackLink(params); }, [instance]);
    var enableLinkTracking = (0, react_1.useCallback)(function () {
        if (instance) {
            (0, useOutboundClickListener_1.default)(instance);
        }
    }, [instance]);
    var pushInstruction = (0, react_1.useCallback)(function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        instance === null || instance === void 0 ? void 0 : instance.pushInstruction.apply(instance, __spreadArray([name], args, false));
    }, [instance]);
    return {
        trackEvent: trackEvent,
        trackEvents: trackEvents,
        trackPageView: trackPageView,
        trackSiteSearch: trackSiteSearch,
        trackLink: trackLink,
        enableLinkTracking: enableLinkTracking,
        pushInstruction: pushInstruction,
    };
}
exports.default = useMatomo;
//# sourceMappingURL=useMatomo.js.map