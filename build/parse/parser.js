var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
export var ASTKinds;
(function (ASTKinds) {
    ASTKinds["program"] = "program";
    ASTKinds["rule"] = "rule";
    ASTKinds["command_1"] = "command_1";
    ASTKinds["command_2"] = "command_2";
    ASTKinds["command_$0"] = "command_$0";
    ASTKinds["update_or_action_1"] = "update_or_action_1";
    ASTKinds["update_or_action_2"] = "update_or_action_2";
    ASTKinds["update"] = "update";
    ASTKinds["update_$0_1"] = "update_$0_1";
    ASTKinds["update_$0_2"] = "update_$0_2";
    ASTKinds["update_$0_$0"] = "update_$0_$0";
    ASTKinds["action"] = "action";
    ASTKinds["action_$0_1"] = "action_$0_1";
    ASTKinds["action_$0_2"] = "action_$0_2";
    ASTKinds["action_$0_3"] = "action_$0_3";
    ASTKinds["action_$0_4"] = "action_$0_4";
    ASTKinds["action_$0_5"] = "action_$0_5";
    ASTKinds["action_$0_6"] = "action_$0_6";
    ASTKinds["action_$0_7"] = "action_$0_7";
    ASTKinds["action_$0_8"] = "action_$0_8";
    ASTKinds["action_$0_9"] = "action_$0_9";
    ASTKinds["action_$0_10"] = "action_$0_10";
    ASTKinds["action_$0_11"] = "action_$0_11";
    ASTKinds["condition"] = "condition";
    ASTKinds["condition_$0"] = "condition_$0";
    ASTKinds["conjunction"] = "conjunction";
    ASTKinds["conjunction_$0"] = "conjunction_$0";
    ASTKinds["relation_1"] = "relation_1";
    ASTKinds["relation_2"] = "relation_2";
    ASTKinds["relation_$0"] = "relation_$0";
    ASTKinds["relation_$1"] = "relation_$1";
    ASTKinds["rel"] = "rel";
    ASTKinds["rel_$0_1"] = "rel_$0_1";
    ASTKinds["rel_$0_2"] = "rel_$0_2";
    ASTKinds["rel_$0_3"] = "rel_$0_3";
    ASTKinds["rel_$0_4"] = "rel_$0_4";
    ASTKinds["rel_$0_5"] = "rel_$0_5";
    ASTKinds["rel_$0_6"] = "rel_$0_6";
    ASTKinds["expr"] = "expr";
    ASTKinds["expr_$0"] = "expr_$0";
    ASTKinds["term"] = "term";
    ASTKinds["term_$0"] = "term_$0";
    ASTKinds["factor_1"] = "factor_1";
    ASTKinds["factor_2"] = "factor_2";
    ASTKinds["factor_3"] = "factor_3";
    ASTKinds["factor_4"] = "factor_4";
    ASTKinds["factor_5"] = "factor_5";
    ASTKinds["factor_6"] = "factor_6";
    ASTKinds["factor_$0"] = "factor_$0";
    ASTKinds["factor_$1"] = "factor_$1";
    ASTKinds["factor_$2"] = "factor_$2";
    ASTKinds["memsugar"] = "memsugar";
    ASTKinds["memsugar_$0_1"] = "memsugar_$0_1";
    ASTKinds["memsugar_$0_2"] = "memsugar_$0_2";
    ASTKinds["memsugar_$0_3"] = "memsugar_$0_3";
    ASTKinds["memsugar_$0_4"] = "memsugar_$0_4";
    ASTKinds["memsugar_$0_5"] = "memsugar_$0_5";
    ASTKinds["memsugar_$0_6"] = "memsugar_$0_6";
    ASTKinds["memsugar_$0_7"] = "memsugar_$0_7";
    ASTKinds["sensor_1"] = "sensor_1";
    ASTKinds["sensor_2"] = "sensor_2";
    ASTKinds["sensor_3"] = "sensor_3";
    ASTKinds["sensor_4"] = "sensor_4";
    ASTKinds["addop_1"] = "addop_1";
    ASTKinds["addop_2"] = "addop_2";
    ASTKinds["mulop_1"] = "mulop_1";
    ASTKinds["mulop_2"] = "mulop_2";
    ASTKinds["mulop_3"] = "mulop_3";
    ASTKinds["__1"] = "__1";
    ASTKinds["__2"] = "__2";
    ASTKinds["__$0"] = "__$0";
    ASTKinds["__$1"] = "__$1";
    ASTKinds["$EOF"] = "$EOF";
})(ASTKinds || (ASTKinds = {}));
var Parser = (function () {
    function Parser(input) {
        this.negating = false;
        this.memoSafe = true;
        this.pos = { overallPos: 0, line: 1, offset: 0 };
        this.input = input;
    }
    Parser.prototype.reset = function (pos) {
        this.pos = pos;
    };
    Parser.prototype.finished = function () {
        return this.pos.overallPos === this.input.length;
    };
    Parser.prototype.clearMemos = function () {
    };
    Parser.prototype.matchprogram = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$rules;
            var $$res = null;
            if (true
                && ($scope$rules = _this.loop(function () { return _this.matchrule($$dpth + 1, $$cr); }, false)) !== null
                && _this.match$EOF($$cr) !== null) {
                $$res = { kind: ASTKinds.program, rules: $scope$rules };
            }
            return $$res;
        });
    };
    Parser.prototype.matchrule = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$cond;
            var $scope$com;
            var $$res = null;
            if (true
                && _this.match_($$dpth + 1, $$cr) !== null
                && ($scope$cond = _this.matchcondition($$dpth + 1, $$cr)) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && _this.regexAccept(String.raw(templateObject_1 || (templateObject_1 = __makeTemplateObject(["(?:-->)"], ["(?:-->)"]))), $$dpth + 1, $$cr) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && ($scope$com = _this.matchcommand($$dpth + 1, $$cr)) !== null
                && _this.regexAccept(String.raw(templateObject_2 || (templateObject_2 = __makeTemplateObject(["(?:;)"], ["(?:;)"]))), $$dpth + 1, $$cr) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && _this.loop(function () { return _this.regexAccept(String.raw(templateObject_3 || (templateObject_3 = __makeTemplateObject(["(?:\n)"], ["(?:\\n)"]))), $$dpth + 1, $$cr); }, true) !== null
                && _this.match_($$dpth + 1, $$cr) !== null) {
                $$res = { kind: ASTKinds.rule, cond: $scope$cond, com: $scope$com };
            }
            return $$res;
        });
    };
    Parser.prototype.matchcommand = function ($$dpth, $$cr) {
        var _this = this;
        return this.choice([
            function () { return _this.matchcommand_1($$dpth + 1, $$cr); },
            function () { return _this.matchcommand_2($$dpth + 1, $$cr); },
        ]);
    };
    Parser.prototype.matchcommand_1 = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$up_or_act;
            var $$res = null;
            if (true
                && ($scope$up_or_act = _this.matchupdate_or_action($$dpth + 1, $$cr)) !== null) {
                $$res = { kind: ASTKinds.command_1, up_or_act: $scope$up_or_act };
            }
            return $$res;
        });
    };
    Parser.prototype.matchcommand_2 = function ($$dpth, $$cr) {
        return this.matchcommand_$0($$dpth + 1, $$cr);
    };
    Parser.prototype.matchcommand_$0 = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$updates;
            var $scope$up_or_act;
            var $$res = null;
            if (true
                && ($scope$updates = _this.loop(function () { return _this.matchupdate($$dpth + 1, $$cr); }, true)) !== null
                && ($scope$up_or_act = _this.matchupdate_or_action($$dpth + 1, $$cr)) !== null) {
                $$res = { kind: ASTKinds.command_$0, updates: $scope$updates, up_or_act: $scope$up_or_act };
            }
            return $$res;
        });
    };
    Parser.prototype.matchupdate_or_action = function ($$dpth, $$cr) {
        var _this = this;
        return this.choice([
            function () { return _this.matchupdate_or_action_1($$dpth + 1, $$cr); },
            function () { return _this.matchupdate_or_action_2($$dpth + 1, $$cr); },
        ]);
    };
    Parser.prototype.matchupdate_or_action_1 = function ($$dpth, $$cr) {
        return this.matchupdate($$dpth + 1, $$cr);
    };
    Parser.prototype.matchupdate_or_action_2 = function ($$dpth, $$cr) {
        return this.matchaction($$dpth + 1, $$cr);
    };
    Parser.prototype.matchupdate = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$arg;
            var $$res = null;
            if (true
                && _this.matchupdate_$0($$dpth + 1, $$cr) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && _this.regexAccept(String.raw(templateObject_4 || (templateObject_4 = __makeTemplateObject(["(?::=)"], ["(?::=)"]))), $$dpth + 1, $$cr) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && ($scope$arg = _this.matchexpr($$dpth + 1, $$cr)) !== null
                && _this.match_($$dpth + 1, $$cr) !== null) {
                $$res = { kind: ASTKinds.update, arg: $scope$arg };
            }
            return $$res;
        });
    };
    Parser.prototype.matchupdate_$0 = function ($$dpth, $$cr) {
        var _this = this;
        return this.choice([
            function () { return _this.matchupdate_$0_1($$dpth + 1, $$cr); },
            function () { return _this.matchupdate_$0_2($$dpth + 1, $$cr); },
        ]);
    };
    Parser.prototype.matchupdate_$0_1 = function ($$dpth, $$cr) {
        return this.matchupdate_$0_$0($$dpth + 1, $$cr);
    };
    Parser.prototype.matchupdate_$0_2 = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$memsugar;
            var $$res = null;
            if (true
                && ($scope$memsugar = _this.matchmemsugar($$dpth + 1, $$cr)) !== null) {
                $$res = { kind: ASTKinds.update_$0_2, memsugar: $scope$memsugar };
            }
            return $$res;
        });
    };
    Parser.prototype.matchupdate_$0_$0 = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$index;
            var $$res = null;
            if (true
                && _this.regexAccept(String.raw(templateObject_5 || (templateObject_5 = __makeTemplateObject(["(?:mem)"], ["(?:mem)"]))), $$dpth + 1, $$cr) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && _this.regexAccept(String.raw(templateObject_6 || (templateObject_6 = __makeTemplateObject(["(?:[)"], ["(?:\\[)"]))), $$dpth + 1, $$cr) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && ($scope$index = _this.matchexpr($$dpth + 1, $$cr)) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && _this.regexAccept(String.raw(templateObject_7 || (templateObject_7 = __makeTemplateObject(["(?:])"], ["(?:\\])"]))), $$dpth + 1, $$cr) !== null) {
                $$res = { kind: ASTKinds.update_$0_$0, index: $scope$index };
            }
            return $$res;
        });
    };
    Parser.prototype.matchaction = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$type;
            var $$res = null;
            if (true
                && ($scope$type = _this.matchaction_$0($$dpth + 1, $$cr)) !== null) {
                $$res = { kind: ASTKinds.action, type: $scope$type };
            }
            return $$res;
        });
    };
    Parser.prototype.matchaction_$0 = function ($$dpth, $$cr) {
        var _this = this;
        return this.choice([
            function () { return _this.matchaction_$0_1($$dpth + 1, $$cr); },
            function () { return _this.matchaction_$0_2($$dpth + 1, $$cr); },
            function () { return _this.matchaction_$0_3($$dpth + 1, $$cr); },
            function () { return _this.matchaction_$0_4($$dpth + 1, $$cr); },
            function () { return _this.matchaction_$0_5($$dpth + 1, $$cr); },
            function () { return _this.matchaction_$0_6($$dpth + 1, $$cr); },
            function () { return _this.matchaction_$0_7($$dpth + 1, $$cr); },
            function () { return _this.matchaction_$0_8($$dpth + 1, $$cr); },
            function () { return _this.matchaction_$0_9($$dpth + 1, $$cr); },
            function () { return _this.matchaction_$0_10($$dpth + 1, $$cr); },
            function () { return _this.matchaction_$0_11($$dpth + 1, $$cr); },
        ]);
    };
    Parser.prototype.matchaction_$0_1 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_8 || (templateObject_8 = __makeTemplateObject(["(?:wait)"], ["(?:wait)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchaction_$0_2 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_9 || (templateObject_9 = __makeTemplateObject(["(?:forward)"], ["(?:forward)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchaction_$0_3 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_10 || (templateObject_10 = __makeTemplateObject(["(?:backward)"], ["(?:backward)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchaction_$0_4 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_11 || (templateObject_11 = __makeTemplateObject(["(?:left)"], ["(?:left)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchaction_$0_5 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_12 || (templateObject_12 = __makeTemplateObject(["(?:right)"], ["(?:right)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchaction_$0_6 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_13 || (templateObject_13 = __makeTemplateObject(["(?:eat)"], ["(?:eat)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchaction_$0_7 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_14 || (templateObject_14 = __makeTemplateObject(["(?:attack)"], ["(?:attack)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchaction_$0_8 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_15 || (templateObject_15 = __makeTemplateObject(["(?:grow)"], ["(?:grow)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchaction_$0_9 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_16 || (templateObject_16 = __makeTemplateObject(["(?:bud)"], ["(?:bud)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchaction_$0_10 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_17 || (templateObject_17 = __makeTemplateObject(["(?:mate)"], ["(?:mate)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchaction_$0_11 = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$ind;
            var $$res = null;
            if (true
                && _this.regexAccept(String.raw(templateObject_18 || (templateObject_18 = __makeTemplateObject(["(?:serve)"], ["(?:serve)"]))), $$dpth + 1, $$cr) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && _this.regexAccept(String.raw(templateObject_19 || (templateObject_19 = __makeTemplateObject(["(?:[)"], ["(?:\\[)"]))), $$dpth + 1, $$cr) !== null
                && ($scope$ind = _this.matchexpr($$dpth + 1, $$cr)) !== null
                && _this.regexAccept(String.raw(templateObject_20 || (templateObject_20 = __makeTemplateObject(["(?:])"], ["(?:\\])"]))), $$dpth + 1, $$cr) !== null) {
                $$res = { kind: ASTKinds.action_$0_11, ind: $scope$ind };
            }
            return $$res;
        });
    };
    Parser.prototype.matchcondition = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$conj;
            var $$res = null;
            if (true
                && ($scope$conj = _this.matchconjunction($$dpth + 1, $$cr)) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && _this.loop(function () { return _this.matchcondition_$0($$dpth + 1, $$cr); }, true) !== null) {
                $$res = { kind: ASTKinds.condition, conj: $scope$conj };
            }
            return $$res;
        });
    };
    Parser.prototype.matchcondition_$0 = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$rest;
            var $$res = null;
            if (true
                && _this.regexAccept(String.raw(templateObject_21 || (templateObject_21 = __makeTemplateObject(["(?: or )"], ["(?: or )"]))), $$dpth + 1, $$cr) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && ($scope$rest = _this.matchconjunction($$dpth + 1, $$cr)) !== null
                && _this.match_($$dpth + 1, $$cr) !== null) {
                $$res = { kind: ASTKinds.condition_$0, rest: $scope$rest };
            }
            return $$res;
        });
    };
    Parser.prototype.matchconjunction = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$rel;
            var $$res = null;
            if (true
                && ($scope$rel = _this.matchrelation($$dpth + 1, $$cr)) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && _this.loop(function () { return _this.matchconjunction_$0($$dpth + 1, $$cr); }, true) !== null) {
                $$res = { kind: ASTKinds.conjunction, rel: $scope$rel };
            }
            return $$res;
        });
    };
    Parser.prototype.matchconjunction_$0 = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$rest;
            var $$res = null;
            if (true
                && _this.regexAccept(String.raw(templateObject_22 || (templateObject_22 = __makeTemplateObject(["(?: and )"], ["(?: and )"]))), $$dpth + 1, $$cr) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && ($scope$rest = _this.matchrelation($$dpth + 1, $$cr)) !== null
                && _this.match_($$dpth + 1, $$cr) !== null) {
                $$res = { kind: ASTKinds.conjunction_$0, rest: $scope$rest };
            }
            return $$res;
        });
    };
    Parser.prototype.matchrelation = function ($$dpth, $$cr) {
        var _this = this;
        return this.choice([
            function () { return _this.matchrelation_1($$dpth + 1, $$cr); },
            function () { return _this.matchrelation_2($$dpth + 1, $$cr); },
        ]);
    };
    Parser.prototype.matchrelation_1 = function ($$dpth, $$cr) {
        return this.matchrelation_$0($$dpth + 1, $$cr);
    };
    Parser.prototype.matchrelation_2 = function ($$dpth, $$cr) {
        return this.matchrelation_$1($$dpth + 1, $$cr);
    };
    Parser.prototype.matchrelation_$0 = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$left;
            var $scope$rel_op;
            var $scope$right;
            var $$res = null;
            if (true
                && ($scope$left = _this.matchexpr($$dpth + 1, $$cr)) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && ($scope$rel_op = _this.matchrel($$dpth + 1, $$cr)) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && ($scope$right = _this.matchexpr($$dpth + 1, $$cr)) !== null) {
                $$res = { kind: ASTKinds.relation_$0, left: $scope$left, rel_op: $scope$rel_op, right: $scope$right };
            }
            return $$res;
        });
    };
    Parser.prototype.matchrelation_$1 = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$cond;
            var $$res = null;
            if (true
                && _this.regexAccept(String.raw(templateObject_23 || (templateObject_23 = __makeTemplateObject(["(?:{)"], ["(?:\\{)"]))), $$dpth + 1, $$cr) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && ($scope$cond = _this.matchcondition($$dpth + 1, $$cr)) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && _this.regexAccept(String.raw(templateObject_24 || (templateObject_24 = __makeTemplateObject(["(?:})"], ["(?:\\})"]))), $$dpth + 1, $$cr) !== null) {
                $$res = { kind: ASTKinds.relation_$1, cond: $scope$cond };
            }
            return $$res;
        });
    };
    Parser.prototype.matchrel = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$operation;
            var $$res = null;
            if (true
                && ($scope$operation = _this.matchrel_$0($$dpth + 1, $$cr)) !== null) {
                $$res = { kind: ASTKinds.rel, operation: $scope$operation };
            }
            return $$res;
        });
    };
    Parser.prototype.matchrel_$0 = function ($$dpth, $$cr) {
        var _this = this;
        return this.choice([
            function () { return _this.matchrel_$0_1($$dpth + 1, $$cr); },
            function () { return _this.matchrel_$0_2($$dpth + 1, $$cr); },
            function () { return _this.matchrel_$0_3($$dpth + 1, $$cr); },
            function () { return _this.matchrel_$0_4($$dpth + 1, $$cr); },
            function () { return _this.matchrel_$0_5($$dpth + 1, $$cr); },
            function () { return _this.matchrel_$0_6($$dpth + 1, $$cr); },
        ]);
    };
    Parser.prototype.matchrel_$0_1 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_25 || (templateObject_25 = __makeTemplateObject(["(?:<)"], ["(?:<)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchrel_$0_2 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_26 || (templateObject_26 = __makeTemplateObject(["(?:<=)"], ["(?:<=)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchrel_$0_3 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_27 || (templateObject_27 = __makeTemplateObject(["(?:=)"], ["(?:=)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchrel_$0_4 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_28 || (templateObject_28 = __makeTemplateObject(["(?:!=)"], ["(?:\\!=)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchrel_$0_5 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_29 || (templateObject_29 = __makeTemplateObject(["(?:>=)"], ["(?:>=)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchrel_$0_6 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_30 || (templateObject_30 = __makeTemplateObject(["(?:>)"], ["(?:>)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchexpr = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$first;
            var $$res = null;
            if (true
                && ($scope$first = _this.matchterm($$dpth + 1, $$cr)) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && _this.loop(function () { return _this.matchexpr_$0($$dpth + 1, $$cr); }, true) !== null) {
                $$res = { kind: ASTKinds.expr, first: $scope$first };
            }
            return $$res;
        });
    };
    Parser.prototype.matchexpr_$0 = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$op;
            var $scope$rest;
            var $$res = null;
            if (true
                && _this.regexAccept(String.raw(templateObject_31 || (templateObject_31 = __makeTemplateObject(["(?: )"], ["(?: )"]))), $$dpth + 1, $$cr) !== null
                && ($scope$op = _this.matchaddop($$dpth + 1, $$cr)) !== null
                && _this.regexAccept(String.raw(templateObject_32 || (templateObject_32 = __makeTemplateObject(["(?: )"], ["(?: )"]))), $$dpth + 1, $$cr) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && ($scope$rest = _this.matchterm($$dpth + 1, $$cr)) !== null
                && _this.match_($$dpth + 1, $$cr) !== null) {
                $$res = { kind: ASTKinds.expr_$0, op: $scope$op, rest: $scope$rest };
            }
            return $$res;
        });
    };
    Parser.prototype.matchterm = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$first;
            var $$res = null;
            if (true
                && ($scope$first = _this.matchfactor($$dpth + 1, $$cr)) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && _this.loop(function () { return _this.matchterm_$0($$dpth + 1, $$cr); }, true) !== null) {
                $$res = { kind: ASTKinds.term, first: $scope$first };
            }
            return $$res;
        });
    };
    Parser.prototype.matchterm_$0 = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$op;
            var $scope$rest;
            var $$res = null;
            if (true
                && _this.regexAccept(String.raw(templateObject_33 || (templateObject_33 = __makeTemplateObject(["(?: )"], ["(?: )"]))), $$dpth + 1, $$cr) !== null
                && ($scope$op = _this.matchmulop($$dpth + 1, $$cr)) !== null
                && _this.regexAccept(String.raw(templateObject_34 || (templateObject_34 = __makeTemplateObject(["(?: )"], ["(?: )"]))), $$dpth + 1, $$cr) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && ($scope$rest = _this.matchfactor($$dpth + 1, $$cr)) !== null
                && _this.match_($$dpth + 1, $$cr) !== null) {
                $$res = { kind: ASTKinds.term_$0, op: $scope$op, rest: $scope$rest };
            }
            return $$res;
        });
    };
    Parser.prototype.matchfactor = function ($$dpth, $$cr) {
        var _this = this;
        return this.choice([
            function () { return _this.matchfactor_1($$dpth + 1, $$cr); },
            function () { return _this.matchfactor_2($$dpth + 1, $$cr); },
            function () { return _this.matchfactor_3($$dpth + 1, $$cr); },
            function () { return _this.matchfactor_4($$dpth + 1, $$cr); },
            function () { return _this.matchfactor_5($$dpth + 1, $$cr); },
            function () { return _this.matchfactor_6($$dpth + 1, $$cr); },
        ]);
    };
    Parser.prototype.matchfactor_1 = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$num;
            var $$res = null;
            if (true
                && ($scope$num = _this.regexAccept(String.raw(templateObject_35 || (templateObject_35 = __makeTemplateObject(["(?:[0-9]+)"], ["(?:[0-9]+)"]))), $$dpth + 1, $$cr)) !== null) {
                $$res = { kind: ASTKinds.factor_1, num: $scope$num };
            }
            return $$res;
        });
    };
    Parser.prototype.matchfactor_2 = function ($$dpth, $$cr) {
        return this.matchfactor_$0($$dpth + 1, $$cr);
    };
    Parser.prototype.matchfactor_3 = function ($$dpth, $$cr) {
        return this.matchfactor_$1($$dpth + 1, $$cr);
    };
    Parser.prototype.matchfactor_4 = function ($$dpth, $$cr) {
        return this.matchfactor_$2($$dpth + 1, $$cr);
    };
    Parser.prototype.matchfactor_5 = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$sensor;
            var $$res = null;
            if (true
                && ($scope$sensor = _this.matchsensor($$dpth + 1, $$cr)) !== null) {
                $$res = { kind: ASTKinds.factor_5, sensor: $scope$sensor };
            }
            return $$res;
        });
    };
    Parser.prototype.matchfactor_6 = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$memsugar;
            var $$res = null;
            if (true
                && ($scope$memsugar = _this.matchmemsugar($$dpth + 1, $$cr)) !== null) {
                $$res = { kind: ASTKinds.factor_6, memsugar: $scope$memsugar };
            }
            return $$res;
        });
    };
    Parser.prototype.matchfactor_$0 = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$type;
            var $scope$index;
            var $$res = null;
            if (true
                && ($scope$type = _this.regexAccept(String.raw(templateObject_36 || (templateObject_36 = __makeTemplateObject(["(?:mem)"], ["(?:mem)"]))), $$dpth + 1, $$cr)) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && _this.regexAccept(String.raw(templateObject_37 || (templateObject_37 = __makeTemplateObject(["(?:[)"], ["(?:\\[)"]))), $$dpth + 1, $$cr) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && ($scope$index = _this.matchexpr($$dpth + 1, $$cr)) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && _this.regexAccept(String.raw(templateObject_38 || (templateObject_38 = __makeTemplateObject(["(?:])"], ["(?:\\])"]))), $$dpth + 1, $$cr) !== null) {
                $$res = { kind: ASTKinds.factor_$0, type: $scope$type, index: $scope$index };
            }
            return $$res;
        });
    };
    Parser.prototype.matchfactor_$1 = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$expr;
            var $$res = null;
            if (true
                && _this.regexAccept(String.raw(templateObject_39 || (templateObject_39 = __makeTemplateObject(["(?:()"], ["(?:\\()"]))), $$dpth + 1, $$cr) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && ($scope$expr = _this.matchexpr($$dpth + 1, $$cr)) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && _this.regexAccept(String.raw(templateObject_40 || (templateObject_40 = __makeTemplateObject(["(?:))"], ["(?:\\))"]))), $$dpth + 1, $$cr) !== null) {
                $$res = { kind: ASTKinds.factor_$1, expr: $scope$expr };
            }
            return $$res;
        });
    };
    Parser.prototype.matchfactor_$2 = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$neg_expr;
            var $$res = null;
            if (true
                && _this.regexAccept(String.raw(templateObject_41 || (templateObject_41 = __makeTemplateObject(["(?:-)"], ["(?:-)"]))), $$dpth + 1, $$cr) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && ($scope$neg_expr = _this.matchexpr($$dpth + 1, $$cr)) !== null) {
                $$res = { kind: ASTKinds.factor_$2, neg_expr: $scope$neg_expr };
            }
            return $$res;
        });
    };
    Parser.prototype.matchmemsugar = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$mem_type;
            var $$res = null;
            if (true
                && ($scope$mem_type = _this.matchmemsugar_$0($$dpth + 1, $$cr)) !== null) {
                $$res = { kind: ASTKinds.memsugar, mem_type: $scope$mem_type };
            }
            return $$res;
        });
    };
    Parser.prototype.matchmemsugar_$0 = function ($$dpth, $$cr) {
        var _this = this;
        return this.choice([
            function () { return _this.matchmemsugar_$0_1($$dpth + 1, $$cr); },
            function () { return _this.matchmemsugar_$0_2($$dpth + 1, $$cr); },
            function () { return _this.matchmemsugar_$0_3($$dpth + 1, $$cr); },
            function () { return _this.matchmemsugar_$0_4($$dpth + 1, $$cr); },
            function () { return _this.matchmemsugar_$0_5($$dpth + 1, $$cr); },
            function () { return _this.matchmemsugar_$0_6($$dpth + 1, $$cr); },
            function () { return _this.matchmemsugar_$0_7($$dpth + 1, $$cr); },
        ]);
    };
    Parser.prototype.matchmemsugar_$0_1 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_42 || (templateObject_42 = __makeTemplateObject(["(?:MEMSIZE)"], ["(?:MEMSIZE)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchmemsugar_$0_2 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_43 || (templateObject_43 = __makeTemplateObject(["(?:DEFENSE)"], ["(?:DEFENSE)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchmemsugar_$0_3 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_44 || (templateObject_44 = __makeTemplateObject(["(?:OFFENSE)"], ["(?:OFFENSE)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchmemsugar_$0_4 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_45 || (templateObject_45 = __makeTemplateObject(["(?:SIZE)"], ["(?:SIZE)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchmemsugar_$0_5 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_46 || (templateObject_46 = __makeTemplateObject(["(?:ENERGY)"], ["(?:ENERGY)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchmemsugar_$0_6 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_47 || (templateObject_47 = __makeTemplateObject(["(?:PASS)"], ["(?:PASS)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchmemsugar_$0_7 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_48 || (templateObject_48 = __makeTemplateObject(["(?:POSTURE)"], ["(?:POSTURE)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchsensor = function ($$dpth, $$cr) {
        var _this = this;
        return this.choice([
            function () { return _this.matchsensor_1($$dpth + 1, $$cr); },
            function () { return _this.matchsensor_2($$dpth + 1, $$cr); },
            function () { return _this.matchsensor_3($$dpth + 1, $$cr); },
            function () { return _this.matchsensor_4($$dpth + 1, $$cr); },
        ]);
    };
    Parser.prototype.matchsensor_1 = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$near;
            var $scope$expr;
            var $$res = null;
            if (true
                && ($scope$near = _this.regexAccept(String.raw(templateObject_49 || (templateObject_49 = __makeTemplateObject(["(?:nearby )"], ["(?:nearby )"]))), $$dpth + 1, $$cr)) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && ($scope$expr = _this.matchexpr($$dpth + 1, $$cr)) !== null) {
                $$res = { kind: ASTKinds.sensor_1, near: $scope$near, expr: $scope$expr };
            }
            return $$res;
        });
    };
    Parser.prototype.matchsensor_2 = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$ahead;
            var $scope$expr;
            var $$res = null;
            if (true
                && ($scope$ahead = _this.regexAccept(String.raw(templateObject_50 || (templateObject_50 = __makeTemplateObject(["(?:ahead )"], ["(?:ahead )"]))), $$dpth + 1, $$cr)) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && ($scope$expr = _this.matchexpr($$dpth + 1, $$cr)) !== null) {
                $$res = { kind: ASTKinds.sensor_2, ahead: $scope$ahead, expr: $scope$expr };
            }
            return $$res;
        });
    };
    Parser.prototype.matchsensor_3 = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$random;
            var $scope$expr;
            var $$res = null;
            if (true
                && ($scope$random = _this.regexAccept(String.raw(templateObject_51 || (templateObject_51 = __makeTemplateObject(["(?:random )"], ["(?:random )"]))), $$dpth + 1, $$cr)) !== null
                && _this.match_($$dpth + 1, $$cr) !== null
                && ($scope$expr = _this.matchexpr($$dpth + 1, $$cr)) !== null) {
                $$res = { kind: ASTKinds.sensor_3, random: $scope$random, expr: $scope$expr };
            }
            return $$res;
        });
    };
    Parser.prototype.matchsensor_4 = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $scope$smell;
            var $$res = null;
            if (true
                && ($scope$smell = _this.regexAccept(String.raw(templateObject_52 || (templateObject_52 = __makeTemplateObject(["(?:smell)"], ["(?:smell)"]))), $$dpth + 1, $$cr)) !== null) {
                $$res = { kind: ASTKinds.sensor_4, smell: $scope$smell };
            }
            return $$res;
        });
    };
    Parser.prototype.matchaddop = function ($$dpth, $$cr) {
        var _this = this;
        return this.choice([
            function () { return _this.matchaddop_1($$dpth + 1, $$cr); },
            function () { return _this.matchaddop_2($$dpth + 1, $$cr); },
        ]);
    };
    Parser.prototype.matchaddop_1 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_53 || (templateObject_53 = __makeTemplateObject(["(?:+)"], ["(?:\\+)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchaddop_2 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_54 || (templateObject_54 = __makeTemplateObject(["(?:-)"], ["(?:-)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchmulop = function ($$dpth, $$cr) {
        var _this = this;
        return this.choice([
            function () { return _this.matchmulop_1($$dpth + 1, $$cr); },
            function () { return _this.matchmulop_2($$dpth + 1, $$cr); },
            function () { return _this.matchmulop_3($$dpth + 1, $$cr); },
        ]);
    };
    Parser.prototype.matchmulop_1 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_55 || (templateObject_55 = __makeTemplateObject(["(?:*)"], ["(?:\\*)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchmulop_2 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_56 || (templateObject_56 = __makeTemplateObject(["(?:/)"], ["(?:/)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.matchmulop_3 = function ($$dpth, $$cr) {
        return this.regexAccept(String.raw(templateObject_57 || (templateObject_57 = __makeTemplateObject(["(?:mod)"], ["(?:mod)"]))), $$dpth + 1, $$cr);
    };
    Parser.prototype.match_ = function ($$dpth, $$cr) {
        var _this = this;
        return this.choice([
            function () { return _this.match__1($$dpth + 1, $$cr); },
            function () { return _this.match__2($$dpth + 1, $$cr); },
        ]);
    };
    Parser.prototype.match__1 = function ($$dpth, $$cr) {
        return this.match__$0($$dpth + 1, $$cr);
    };
    Parser.prototype.match__2 = function ($$dpth, $$cr) {
        return this.match__$1($$dpth + 1, $$cr);
    };
    Parser.prototype.match__$0 = function ($$dpth, $$cr) {
        var _this = this;
        return this.run($$dpth, function () {
            var $$res = null;
            if (true
                && _this.regexAccept(String.raw(templateObject_58 || (templateObject_58 = __makeTemplateObject(["(?://)"], ["(?://)"]))), $$dpth + 1, $$cr) !== null
                && _this.loop(function () { return _this.negate(function () { return _this.regexAccept(String.raw(templateObject_59 || (templateObject_59 = __makeTemplateObject(["(?:\n)"], ["(?:\\n)"]))), $$dpth + 1, $$cr); }); }, true) !== null
                && _this.regexAccept(String.raw(templateObject_60 || (templateObject_60 = __makeTemplateObject(["(?:\n)"], ["(?:\\n)"]))), $$dpth + 1, $$cr) !== null) {
                $$res = { kind: ASTKinds.__$0 };
            }
            return $$res;
        });
    };
    Parser.prototype.match__$1 = function ($$dpth, $$cr) {
        var _this = this;
        return this.loop(function () { return _this.regexAccept(String.raw(templateObject_61 || (templateObject_61 = __makeTemplateObject(["(?:[ \t\r\n])"], ["(?:[ \\t\\r\\n])"]))), $$dpth + 1, $$cr); }, true);
    };
    Parser.prototype.test = function () {
        var mrk = this.mark();
        var res = this.matchprogram(0);
        var ans = res !== null;
        this.reset(mrk);
        return ans;
    };
    Parser.prototype.parse = function () {
        var mrk = this.mark();
        var res = this.matchprogram(0);
        if (res)
            return { ast: res, errs: [] };
        this.reset(mrk);
        var rec = new ErrorTracker();
        this.clearMemos();
        this.matchprogram(0, rec);
        var err = rec.getErr();
        return { ast: res, errs: err !== null ? [err] : [] };
    };
    Parser.prototype.mark = function () {
        return this.pos;
    };
    Parser.prototype.loop = function (func, star) {
        if (star === void 0) { star = false; }
        var mrk = this.mark();
        var res = [];
        for (;;) {
            var t = func();
            if (t === null) {
                break;
            }
            res.push(t);
        }
        if (star || res.length > 0) {
            return res;
        }
        this.reset(mrk);
        return null;
    };
    Parser.prototype.run = function ($$dpth, fn) {
        var mrk = this.mark();
        var res = fn();
        if (res !== null)
            return res;
        this.reset(mrk);
        return null;
    };
    Parser.prototype.choice = function (fns) {
        for (var _i = 0, fns_1 = fns; _i < fns_1.length; _i++) {
            var f = fns_1[_i];
            var res = f();
            if (res !== null) {
                return res;
            }
        }
        return null;
    };
    Parser.prototype.regexAccept = function (match, dpth, cr) {
        var _this = this;
        return this.run(dpth, function () {
            var reg = new RegExp(match, "y");
            var mrk = _this.mark();
            reg.lastIndex = mrk.overallPos;
            var res = _this.tryConsume(reg);
            if (cr) {
                cr.record(mrk, res, {
                    kind: "RegexMatch",
                    literal: match.substring(3, match.length - 1),
                    negated: _this.negating
                });
            }
            return res;
        });
    };
    Parser.prototype.tryConsume = function (reg) {
        var res = reg.exec(this.input);
        if (res) {
            var lineJmp = 0;
            var lind = -1;
            for (var i = 0; i < res[0].length; ++i) {
                if (res[0][i] === "\n") {
                    ++lineJmp;
                    lind = i;
                }
            }
            this.pos = {
                overallPos: reg.lastIndex,
                line: this.pos.line + lineJmp,
                offset: lind === -1 ? this.pos.offset + res[0].length : (res[0].length - lind - 1)
            };
            return res[0];
        }
        return null;
    };
    Parser.prototype.noConsume = function (fn) {
        var mrk = this.mark();
        var res = fn();
        this.reset(mrk);
        return res;
    };
    Parser.prototype.negate = function (fn) {
        var mrk = this.mark();
        var oneg = this.negating;
        this.negating = !oneg;
        var res = fn();
        this.negating = oneg;
        this.reset(mrk);
        return res === null ? true : null;
    };
    Parser.prototype.memoise = function (rule, memo) {
        var $scope$pos = this.mark();
        var $scope$memoRes = memo.get($scope$pos.overallPos);
        if (this.memoSafe && $scope$memoRes !== undefined) {
            this.reset($scope$memoRes[1]);
            return $scope$memoRes[0];
        }
        var $scope$result = rule();
        if (this.memoSafe)
            memo.set($scope$pos.overallPos, [$scope$result, this.mark()]);
        return $scope$result;
    };
    Parser.prototype.match$EOF = function (et) {
        var res = this.finished() ? { kind: ASTKinds.$EOF } : null;
        if (et)
            et.record(this.mark(), res, { kind: "EOF", negated: this.negating });
        return res;
    };
    return Parser;
}());
export { Parser };
export function parse(s) {
    var p = new Parser(s);
    return p.parse();
}
var SyntaxErr = (function () {
    function SyntaxErr(pos, expmatches) {
        this.pos = pos;
        this.expmatches = __spreadArray([], expmatches, true);
    }
    SyntaxErr.prototype.toString = function () {
        return "Syntax Error at line ".concat(this.pos.line, ":").concat(this.pos.offset, ". Expected one of ").concat(this.expmatches.map(function (x) { return x.kind === "EOF" ? " EOF" : " ".concat(x.negated ? 'not ' : '', "'").concat(x.literal, "'"); }));
    };
    return SyntaxErr;
}());
export { SyntaxErr };
var ErrorTracker = (function () {
    function ErrorTracker() {
        this.mxpos = { overallPos: -1, line: -1, offset: -1 };
        this.regexset = new Set();
        this.pmatches = [];
    }
    ErrorTracker.prototype.record = function (pos, result, att) {
        if ((result === null) === att.negated)
            return;
        if (pos.overallPos > this.mxpos.overallPos) {
            this.mxpos = pos;
            this.pmatches = [];
            this.regexset.clear();
        }
        if (this.mxpos.overallPos === pos.overallPos) {
            if (att.kind === "RegexMatch") {
                if (!this.regexset.has(att.literal))
                    this.pmatches.push(att);
                this.regexset.add(att.literal);
            }
            else {
                this.pmatches.push(att);
            }
        }
    };
    ErrorTracker.prototype.getErr = function () {
        if (this.mxpos.overallPos !== -1)
            return new SyntaxErr(this.mxpos, this.pmatches);
        return null;
    };
    return ErrorTracker;
}());
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20, templateObject_21, templateObject_22, templateObject_23, templateObject_24, templateObject_25, templateObject_26, templateObject_27, templateObject_28, templateObject_29, templateObject_30, templateObject_31, templateObject_32, templateObject_33, templateObject_34, templateObject_35, templateObject_36, templateObject_37, templateObject_38, templateObject_39, templateObject_40, templateObject_41, templateObject_42, templateObject_43, templateObject_44, templateObject_45, templateObject_46, templateObject_47, templateObject_48, templateObject_49, templateObject_50, templateObject_51, templateObject_52, templateObject_53, templateObject_54, templateObject_55, templateObject_56, templateObject_57, templateObject_58, templateObject_59, templateObject_60, templateObject_61;
//# sourceMappingURL=parser.js.map