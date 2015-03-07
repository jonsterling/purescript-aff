// Generated by psc version 0.6.8
var PS = PS || {};
PS.Prelude = (function () {
    "use strict";
    
    function showNumberImpl(n) {
      return n.toString();
    }
    ;
    
    function numAdd(n1) {
      return function(n2) {
        return n1 + n2;
      };
    }
    ;
    
    function numSub(n1) {
      return function(n2) {
        return n1 - n2;
      };
    }
    ;
    
    function numMul(n1) {
      return function(n2) {
        return n1 * n2;
      };
    }
    ;
    
    function refEq(r1) {
      return function(r2) {
        return r1 === r2;
      };
    }
    ;
    
    function refIneq(r1) {
      return function(r2) {
        return r1 !== r2;
      };
    }
    ;
    
    function concatString(s1) {
      return function(s2) {
        return s1 + s2;
      };
    }
    ;
    var Unit = function (x) {
        return x;
    };
    var Semigroupoid = function ($less$less$less) {
        this["<<<"] = $less$less$less;
    };
    var Category = function (__superclass_Prelude$dotSemigroupoid_0, id) {
        this["__superclass_Prelude.Semigroupoid_0"] = __superclass_Prelude$dotSemigroupoid_0;
        this.id = id;
    };
    var Show = function (show) {
        this.show = show;
    };
    var Functor = function ($less$dollar$greater) {
        this["<$>"] = $less$dollar$greater;
    };
    var Apply = function ($less$times$greater, __superclass_Prelude$dotFunctor_0) {
        this["<*>"] = $less$times$greater;
        this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
    };
    var Applicative = function (__superclass_Prelude$dotApply_0, pure) {
        this["__superclass_Prelude.Apply_0"] = __superclass_Prelude$dotApply_0;
        this.pure = pure;
    };
    var Bind = function ($greater$greater$eq, __superclass_Prelude$dotApply_0) {
        this[">>="] = $greater$greater$eq;
        this["__superclass_Prelude.Apply_0"] = __superclass_Prelude$dotApply_0;
    };
    var Monad = function (__superclass_Prelude$dotApplicative_0, __superclass_Prelude$dotBind_1) {
        this["__superclass_Prelude.Applicative_0"] = __superclass_Prelude$dotApplicative_0;
        this["__superclass_Prelude.Bind_1"] = __superclass_Prelude$dotBind_1;
    };
    
    /**
     *  | Addition and multiplication
     */
    var Semiring = function ($times, $plus, one, zero) {
        this["*"] = $times;
        this["+"] = $plus;
        this.one = one;
        this.zero = zero;
    };
    
    /**
     *  | Addition, multiplication, and subtraction
     */
    var Ring = function ($minus, __superclass_Prelude$dotSemiring_0) {
        this["-"] = $minus;
        this["__superclass_Prelude.Semiring_0"] = __superclass_Prelude$dotSemiring_0;
    };
    var Eq = function ($div$eq, $eq$eq) {
        this["/="] = $div$eq;
        this["=="] = $eq$eq;
    };
    var Semigroup = function ($less$greater) {
        this["<>"] = $less$greater;
    };
    var $greater$greater$eq = function (dict) {
        return dict[">>="];
    };
    var $eq$eq = function (dict) {
        return dict["=="];
    };
    var $less$greater = function (dict) {
        return dict["<>"];
    };
    var $less$less$less = function (dict) {
        return dict["<<<"];
    };
    var $greater$greater$greater = function (__dict_Semigroupoid_0) {
        return function (f) {
            return function (g) {
                return $less$less$less(__dict_Semigroupoid_0)(g)(f);
            };
        };
    };
    var $less$times$greater = function (dict) {
        return dict["<*>"];
    };
    var $less$dollar$greater = function (dict) {
        return dict["<$>"];
    };
    
    /**
     *  | Addition, multiplication, and subtraction
     */
    var $minus = function (dict) {
        return dict["-"];
    };
    var $plus$plus = function (__dict_Semigroup_2) {
        return $less$greater(__dict_Semigroup_2);
    };
    
    /**
     *  | Addition and multiplication
     */
    var $plus = function (dict) {
        return dict["+"];
    };
    var $dollar = function (f) {
        return function (x) {
            return f(x);
        };
    };
    var unit = {};
    var showNumber = new Show(showNumberImpl);
    var show = function (dict) {
        return dict.show;
    };
    var semiringNumber = new Semiring(numMul, numAdd, 1, 0);
    var semigroupoidArr = new Semigroupoid(function (f) {
        return function (g) {
            return function (x) {
                return f(g(x));
            };
        };
    });
    var semigroupString = new Semigroup(concatString);
    var ringNumber = new Ring(numSub, function () {
        return semiringNumber;
    });
    var pure = function (dict) {
        return dict.pure;
    };
    var $$return = function (__dict_Monad_5) {
        return pure(__dict_Monad_5["__superclass_Prelude.Applicative_0"]());
    };
    var liftA1 = function (__dict_Applicative_8) {
        return function (f) {
            return function (a) {
                return $less$times$greater(__dict_Applicative_8["__superclass_Prelude.Apply_0"]())(pure(__dict_Applicative_8)(f))(a);
            };
        };
    };
    var id = function (dict) {
        return dict.id;
    };
    var eqNumber = new Eq(refIneq, refEq);
    
    /**
     *  | Returns its first argument and ignores its second.
     */
    var $$const = function (_37) {
        return function (_38) {
            return _37;
        };
    };
    var categoryArr = new Category(function () {
        return semigroupoidArr;
    }, function (x) {
        return x;
    });
    var ap = function (__dict_Monad_16) {
        return function (f) {
            return function (a) {
                return $greater$greater$eq(__dict_Monad_16["__superclass_Prelude.Bind_1"]())(f)(function (_2) {
                    return $greater$greater$eq(__dict_Monad_16["__superclass_Prelude.Bind_1"]())(a)(function (_1) {
                        return $$return(__dict_Monad_16)(_2(_1));
                    });
                });
            };
        };
    };
    return {
        Unit: Unit, 
        Semigroup: Semigroup, 
        Eq: Eq, 
        Ring: Ring, 
        Semiring: Semiring, 
        Monad: Monad, 
        Bind: Bind, 
        Applicative: Applicative, 
        Apply: Apply, 
        Functor: Functor, 
        Show: Show, 
        Category: Category, 
        Semigroupoid: Semigroupoid, 
        unit: unit, 
        "++": $plus$plus, 
        "<>": $less$greater, 
        refIneq: refIneq, 
        refEq: refEq, 
        "==": $eq$eq, 
        "-": $minus, 
        "+": $plus, 
        ap: ap, 
        "return": $$return, 
        ">>=": $greater$greater$eq, 
        liftA1: liftA1, 
        pure: pure, 
        "<*>": $less$times$greater, 
        "<$>": $less$dollar$greater, 
        show: show, 
        "$": $dollar, 
        id: id, 
        ">>>": $greater$greater$greater, 
        "<<<": $less$less$less, 
        "const": $$const, 
        semigroupoidArr: semigroupoidArr, 
        categoryArr: categoryArr, 
        showNumber: showNumber, 
        semiringNumber: semiringNumber, 
        ringNumber: ringNumber, 
        eqNumber: eqNumber, 
        semigroupString: semigroupString
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    
    function returnE(a) {
      return function() {
        return a;
      };
    }
    ;
    
    function bindE(a) {
      return function(f) {
        return function() {
          return f(a())();
        };
      };
    }
    ;
    var monadEff = new Prelude.Monad(function () {
        return applicativeEff;
    }, function () {
        return bindEff;
    });
    var bindEff = new Prelude.Bind(bindE, function () {
        return applyEff;
    });
    var applyEff = new Prelude.Apply(Prelude.ap(monadEff), function () {
        return functorEff;
    });
    var applicativeEff = new Prelude.Applicative(function () {
        return applyEff;
    }, returnE);
    var functorEff = new Prelude.Functor(Prelude.liftA1(applicativeEff));
    return {
        bindE: bindE, 
        returnE: returnE, 
        functorEff: functorEff, 
        applyEff: applyEff, 
        applicativeEff: applicativeEff, 
        bindEff: bindEff, 
        monadEff: monadEff
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff_Exception = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    
  function error(msg) {
    return new Error(msg);
  }
  ;
    return {
        error: error
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff_Unsafe = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    
    function unsafeInterleaveEff(f) {
      return f;
    }
    ;
    return {
        unsafeInterleaveEff: unsafeInterleaveEff
    };
})();
var PS = PS || {};
PS.Debug_Trace = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    
    function trace(s) {
      return function() {
        console.log(s);
        return {};
      };
    }
    ;
    return {
        trace: trace
    };
})();
var PS = PS || {};
PS.Control_Apply = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var $times$greater = function (__dict_Apply_46) {
        return function (a) {
            return function (b) {
                return Prelude["<*>"](__dict_Apply_46)(Prelude["<$>"](__dict_Apply_46["__superclass_Prelude.Functor_0"]())(Prelude["const"](Prelude.id(Prelude.categoryArr)))(a))(b);
            };
        };
    };
    return {
        "*>": $times$greater
    };
})();
var PS = PS || {};
PS.Control_Alt = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Alt = function ($less$bar$greater, __superclass_Prelude$dotFunctor_0) {
        this["<|>"] = $less$bar$greater;
        this["__superclass_Prelude.Functor_0"] = __superclass_Prelude$dotFunctor_0;
    };
    var $less$bar$greater = function (dict) {
        return dict["<|>"];
    };
    return {
        Alt: Alt, 
        "<|>": $less$bar$greater
    };
})();
var PS = PS || {};
PS.Data_Either = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Alt = PS.Control_Alt;
    var Left = (function () {
        function Left(value0) {
            this.value0 = value0;
        };
        Left.create = function (value0) {
            return new Left(value0);
        };
        return Left;
    })();
    var Right = (function () {
        function Right(value0) {
            this.value0 = value0;
        };
        Right.create = function (value0) {
            return new Right(value0);
        };
        return Right;
    })();
    var either = function (_79) {
        return function (_80) {
            return function (_81) {
                if (_81 instanceof Left) {
                    return _79(_81.value0);
                };
                if (_81 instanceof Right) {
                    return _80(_81.value0);
                };
                throw new Error("Failed pattern match");
            };
        };
    };
    return {
        Left: Left, 
        Right: Right, 
        either: either
    };
})();
var PS = PS || {};
PS.Control_Monad_Eff_Class = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Data_Monoid = PS.Data_Monoid;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var Control_Monad_Maybe_Trans = PS.Control_Monad_Maybe_Trans;
    var Control_Monad_Error_Trans = PS.Control_Monad_Error_Trans;
    var Control_Monad_State_Trans = PS.Control_Monad_State_Trans;
    var Control_Monad_Writer_Trans = PS.Control_Monad_Writer_Trans;
    var Control_Monad_Reader_Trans = PS.Control_Monad_Reader_Trans;
    var Control_Monad_RWS_Trans = PS.Control_Monad_RWS_Trans;
    
    /**
     *  | The `MonadEff` class captures those monads which support native effects.
     *  |
     *  | Instances are provided for `Eff` itself, and the standard monad transformers.
     *  |
     *  | `liftEff` can be used in any appropriate monad transformer stack to lift an action
     *  | of type `Eff eff a` into the monad.
     *  |
     *  | Note that `MonadEff` is parameterized by the row of effects, so type inference can be
     *  | tricky. It is generally recommended to either work with a polymorphic row of effects,
     *  | or a concrete, closed row of effects such as `(trace :: Trace)`.
     */
    var MonadEff = function (__superclass_Prelude$dotMonad_0, liftEff) {
        this["__superclass_Prelude.Monad_0"] = __superclass_Prelude$dotMonad_0;
        this.liftEff = liftEff;
    };
    
    /**
     *  | The `MonadEff` class captures those monads which support native effects.
     *  |
     *  | Instances are provided for `Eff` itself, and the standard monad transformers.
     *  |
     *  | `liftEff` can be used in any appropriate monad transformer stack to lift an action
     *  | of type `Eff eff a` into the monad.
     *  |
     *  | Note that `MonadEff` is parameterized by the row of effects, so type inference can be
     *  | tricky. It is generally recommended to either work with a polymorphic row of effects,
     *  | or a concrete, closed row of effects such as `(trace :: Trace)`.
     */
    var liftEff = function (dict) {
        return dict.liftEff;
    };
    return {
        MonadEff: MonadEff, 
        liftEff: liftEff
    };
})();
var PS = PS || {};
PS.Control_Monad_Error_Class = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Error_Trans = PS.Control_Monad_Error_Trans;
    var Control_Monad_Trans = PS.Control_Monad_Trans;
    var Control_Monad_Maybe_Trans = PS.Control_Monad_Maybe_Trans;
    var Control_Monad_Reader_Trans = PS.Control_Monad_Reader_Trans;
    var Control_Monad_Writer_Trans = PS.Control_Monad_Writer_Trans;
    var Control_Monad_State_Trans = PS.Control_Monad_State_Trans;
    var Control_Monad_Error = PS.Control_Monad_Error;
    var Data_Either = PS.Data_Either;
    var Data_Monoid = PS.Data_Monoid;
    var MonadError = function (catchError, throwError) {
        this.catchError = catchError;
        this.throwError = throwError;
    };
    var throwError = function (dict) {
        return dict.throwError;
    };
    return {
        MonadError: MonadError, 
        throwError: throwError
    };
})();
var PS = PS || {};
PS.Control_Monad_Aff = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Apply = PS.Control_Apply;
    var Control_Monad_Eff_Unsafe = PS.Control_Monad_Eff_Unsafe;
    var Control_Monad_Eff_Exception = PS.Control_Monad_Eff_Exception;
    var Data_Monoid = PS.Data_Monoid;
    var Data_Either = PS.Data_Either;
    var Control_Monad_Error_Class = PS.Control_Monad_Error_Class;
    var Control_Alt = PS.Control_Alt;
    var Control_Plus = PS.Control_Plus;
    var Control_Alternative = PS.Control_Alternative;
    var Control_MonadPlus = PS.Control_MonadPlus;
    var Control_Monad_Eff = PS.Control_Monad_Eff;
    var Control_Monad_Eff_Class = PS.Control_Monad_Eff_Class;
    
    function later(aff) {
      return function(error) {
        return function(success) {
          return function() {
            setTimeout(aff(error)(success), 0);
          }
        }
      }
    }
  ;
    
    /**
     *  | A computation with effects `e`. The computation either errors or 
     *  | produces a value of type `a`.
     *  |
     *  | This is moral equivalent of `ErrorT (ContT Unit (EffA e)) a`.
     */
    var Aff = function (x) {
        return x;
    };
    
    /**
     *  | Runs the asynchronous computation. You must supply an error callback and a 
     *  | success callback.
     */
    var runAff = function (_293) {
        return function (_294) {
            return function (_295) {
                return _295(_293)(_294);
            };
        };
    };
    
    /**
     *  | Converts the asynchronous computation into a synchronous one. All values 
     *  | and errors are ignored.
     */
    var launchAff = function (_292) {
        return _292(Prelude["const"](Prelude.pure(Control_Monad_Eff.applicativeEff)(Prelude.unit)))(Prelude["const"](Prelude.pure(Control_Monad_Eff.applicativeEff)(Prelude.unit)));
    };
    var functorAff = new Prelude.Functor(function (_297) {
        return function (_298) {
            return function (ex) {
                return function (h) {
                    return _298(ex)(function (a) {
                        return h(_297(a));
                    });
                };
            };
        };
    });
    
    /**
     *  | Forks the specified asynchronous computation so subsequent monadic binds 
     *  | will not block on the result of the computation.
     */
    var forkAff = function (aff) {
        return function (_286) {
            return function (f) {
                return Control_Apply["*>"](Control_Monad_Eff.applyEff)(launchAff(aff))(Control_Monad_Eff_Unsafe.unsafeInterleaveEff(f(Prelude.unit)));
            };
        };
    };
    
    /**
     *  | Promotes any error to the value level of the asynchronous monad.
     */
    var attempt = function (_296) {
        return function (_287) {
            return function (f) {
                return _296(Prelude[">>>"](Prelude.semigroupoidArr)(Data_Either.Left.create)(f))(Prelude[">>>"](Prelude.semigroupoidArr)(Data_Either.Right.create)(f));
            };
        };
    };
    var applyAff = new Prelude.Apply(function (_299) {
        return function (_300) {
            return function (ex) {
                return function (h) {
                    return _299(ex)(function (f) {
                        return Control_Monad_Eff_Unsafe.unsafeInterleaveEff(_300(ex)(function (a) {
                            return h(f(a));
                        }));
                    });
                };
            };
        };
    }, function () {
        return functorAff;
    });
    var bindAff = new Prelude.Bind(function (_301) {
        return function (_302) {
            return function (ex) {
                return function (h) {
                    return _301(ex)(function (a) {
                        return Control_Monad_Eff_Unsafe.unsafeInterleaveEff(runAff(ex)(function (b) {
                            return h(b);
                        })(_302(a)));
                    });
                };
            };
        };
    }, function () {
        return applyAff;
    });
    var applicativeAff = new Prelude.Applicative(function () {
        return applyAff;
    }, function (v) {
        return function (_289) {
            return function (h) {
                return Control_Monad_Eff_Unsafe.unsafeInterleaveEff(h(v));
            };
        };
    });
    var monadAff = new Prelude.Monad(function () {
        return applicativeAff;
    }, function () {
        return bindAff;
    });
    var monadEffAff = new Control_Monad_Eff_Class.MonadEff(function () {
        return monadAff;
    }, function (fa) {
        return function (_290) {
            return function (h) {
                return Control_Monad_Eff_Unsafe.unsafeInterleaveEff(Prelude[">>="](Control_Monad_Eff.bindEff)(Control_Monad_Eff_Unsafe.unsafeInterleaveEff(fa))(h));
            };
        };
    });
    
    /**
     *  | Allows users to catch and throw errors on the error channel of the 
     *  | asynchronous computation. See documentation in `purescript-transformers`.
     */
    var monadErrorAff = new Control_Monad_Error_Class.MonadError(function (aff) {
        return function (ex) {
            return Prelude[">>="](bindAff)(attempt(aff))(Data_Either.either(ex)(Prelude.pure(applicativeAff)));
        };
    }, function (e) {
        return function (ex) {
            return function (_291) {
                return Control_Monad_Eff_Unsafe.unsafeInterleaveEff(ex(e));
            };
        };
    });
    
    /**
     *  | Ignores any errors.
     */
    var apathize = function (a) {
        return Prelude["<$>"](functorAff)(Prelude["const"](Prelude.unit))(attempt(a));
    };
    return {
        runAff: runAff, 
        launchAff: launchAff, 
        later: later, 
        forkAff: forkAff, 
        attempt: attempt, 
        apathize: apathize, 
        functorAff: functorAff, 
        applyAff: applyAff, 
        applicativeAff: applicativeAff, 
        bindAff: bindAff, 
        monadAff: monadAff, 
        monadEffAff: monadEffAff, 
        monadErrorAff: monadErrorAff
    };
})();
var PS = PS || {};
PS.Control_Monad_Aff_Var = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Aff = PS.Control_Monad_Aff;
    var Control_Monad_Eff_Exception = PS.Control_Monad_Eff_Exception;
    
    function makeVar(error) {
      return function(success) {
        return function() {
          success({
            consumers: [],
            producers: [],
            error: undefined 
          })();
        }
      }
    }
  ;
    
    function takeVar(avar) {
      return function(error) {
        return function(success) {
          return function() {
            if (avar.error !== undefined) {
              error(avar.error)();
            } else if (avar.producers.length > 0) {
              var producer = avar.producers.shift();

              producer(error, success);
            } else {
              avar.consumers.push({error: error, success: success});
            }
          }
        }
      } 
    }
  ;
    
    function putVar(avar) {
      return function(a) {
        return function(error) {
          return function(success) {
            return function() {
              if (avar.error !== undefined) {
                error(avar.error)();
              } else if (avar.consumers.length === 0) {
                avar.producers.push(function(error, success) {
                  success(a)();
                });

                success({})();
              } else {
                var consumer = avar.consumers.shift();

                try {
                  consumer.success(a)();
                } catch (e) {
                  error(e)();

                  return;                  
                }

                success({})();
              }
            }
          }
        }
      }
    }
  ;
    
    function killVar(avar) {
      return function(e) {
        return function(error) {
          return function(success) {
            return function() {
              if (avar.error !== undefined) {
                error(avar.error);
              } else {
                var errors = [];

                avar.error = e;

                while (avar.consumers.length > 0) {
                  var consumer = avar.consumers.shift();

                  try {
                    consumer.error(e)();
                  } catch (e) {
                    errors.push(e);              
                  }
                }

                if (errors.length > 0) error(errors[0])();
                else success({})();
              }
            }
          }
        }
      }
    }
  ;
    
    /**
     *  | Makes a variable and sets it to some value.
     */
    var makeVar$prime = function (a) {
        return Prelude[">>="](Control_Monad_Aff.bindAff)(makeVar)(function (_21) {
            return Prelude[">>="](Control_Monad_Aff.bindAff)(putVar(_21)(a))(function () {
                return Prelude["return"](Control_Monad_Aff.monadAff)(_21);
            });
        });
    };
    return {
        takeVar: takeVar, 
        putVar: putVar, 
        "makeVar'": makeVar$prime, 
        makeVar: makeVar, 
        killVar: killVar
    };
})();
var PS = PS || {};
PS.Control_Monad_Aff_Par = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Data_Monoid = PS.Data_Monoid;
    var Control_Monad_Aff_Var = PS.Control_Monad_Aff_Var;
    var Control_Monad_Aff = PS.Control_Monad_Aff;
    var Data_Either = PS.Data_Either;
    var Control_Plus = PS.Control_Plus;
    var Control_Apply = PS.Control_Apply;
    var Control_Alt = PS.Control_Alt;
    var Control_Alternative = PS.Control_Alternative;
    var Control_Monad_Error_Class = PS.Control_Monad_Error_Class;
    var Par = function (x) {
        return x;
    };
    
    /**
     *  | Extracts the `Aff` from the `Par`.
     */
    var runPar = function (_303) {
        return _303;
    };
    var functorPar = new Prelude.Functor(function (_304) {
        return function (_305) {
            return Prelude["<$>"](Control_Monad_Aff.functorAff)(_304)(_305);
        };
    });
    
    /**
     *  | Returns the first value, or the first error if both error.
     */
    var altPar = new Control_Alt.Alt(function (_308) {
        return function (_309) {
            var maybeKill = function (va) {
                return function (ve) {
                    return function (err) {
                        return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff_Var.takeVar(ve))(function (_24) {
                            return Prelude[">>="](Control_Monad_Aff.bindAff)((function () {
                                var _512 = _24 === 1;
                                if (_512) {
                                    return Control_Monad_Aff_Var.killVar(va)(err);
                                };
                                if (!_512) {
                                    return Prelude["return"](Control_Monad_Aff.monadAff)(Prelude.unit);
                                };
                                throw new Error("Failed pattern match");
                            })())(function () {
                                return Control_Monad_Aff_Var.putVar(ve)(_24 + 1);
                            });
                        });
                    };
                };
            };
            return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff_Var.makeVar)(function (_26) {
                return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff_Var["makeVar'"](0))(function (_25) {
                    return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff.forkAff(Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff.attempt(_308))(Data_Either.either(maybeKill(_26)(_25))(Control_Monad_Aff_Var.putVar(_26)))))(function () {
                        return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff.forkAff(Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff.attempt(_309))(Data_Either.either(maybeKill(_26)(_25))(Control_Monad_Aff_Var.putVar(_26)))))(function () {
                            return Control_Monad_Aff_Var.takeVar(_26);
                        });
                    });
                });
            });
        };
    }, function () {
        return functorPar;
    });
    return {
        Par: Par, 
        runPar: runPar, 
        functorPar: functorPar, 
        altPar: altPar
    };
})();
var PS = PS || {};
PS.Examples = (function () {
    "use strict";
    var Prelude = PS.Prelude;
    var Control_Monad_Eff_Class = PS.Control_Monad_Eff_Class;
    var Debug_Trace = PS.Debug_Trace;
    var Control_Monad_Aff = PS.Control_Monad_Aff;
    var Control_Monad_Error_Class = PS.Control_Monad_Error_Class;
    var Control_Monad_Eff_Exception = PS.Control_Monad_Eff_Exception;
    var Data_Either = PS.Data_Either;
    var Control_Monad_Aff_Var = PS.Control_Monad_Aff_Var;
    var Control_Monad_Aff_Par = PS.Control_Monad_Aff_Par;
    var Control_Alt = PS.Control_Alt;
    var Control_Apply = PS.Control_Apply;
    
    function timeout(time) {
      return function(error) {
        return function(success) {
          return function() {
            setTimeout(function() {
              try {
                success({})();
              } catch (e) {
                error(e)();
              }
            }, time);
          }
        }
      }
    }
  ;
    var test_sequencing = function (_479) {
        if (_479 === 0) {
            return Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Debug_Trace.trace("Done"));
        };
        return Prelude[">>="](Control_Monad_Aff.bindAff)(timeout(1000))(function () {
            return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Debug_Trace.trace(Prelude.show(Prelude.showNumber)(_479) + " seconds left")))(function () {
                return test_sequencing(_479 - 1);
            });
        });
    };
    var test_putTakeVar = Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff_Var.makeVar)(function (_33) {
        return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff.forkAff(Control_Monad_Aff.later(Control_Monad_Aff_Var.putVar(_33)(1.0))))(function () {
            return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff_Var.takeVar(_33))(function (_32) {
                return Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Debug_Trace.trace("Success: Value " + Prelude.show(Prelude.showNumber)(_32)));
            });
        });
    });
    var test_pure = Prelude[">>="](Control_Monad_Aff.bindAff)(Prelude.pure(Control_Monad_Aff.applicativeAff)(Prelude.unit))(function () {
        return Prelude[">>="](Control_Monad_Aff.bindAff)(Prelude.pure(Control_Monad_Aff.applicativeAff)(Prelude.unit))(function () {
            return Prelude[">>="](Control_Monad_Aff.bindAff)(Prelude.pure(Control_Monad_Aff.applicativeAff)(Prelude.unit))(function () {
                return Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Debug_Trace.trace("Success: Got all the way past 4 pures"));
            });
        });
    });
    var test_parRace = Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff_Par.runPar(Control_Alt["<|>"](Control_Monad_Aff_Par.altPar)(Control_Apply["*>"](Control_Monad_Aff.applyAff)(timeout(100))(Prelude.pure(Control_Monad_Aff.applicativeAff)("Success: Early bird got the worm")))(Control_Apply["*>"](Control_Monad_Aff.applyAff)(timeout(1000))(Prelude.pure(Control_Monad_Aff.applicativeAff)("Failure: Late bird got the worm")))))(function (_36) {
        return Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Debug_Trace.trace(_36));
    });
    var test_killVar = Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff_Var.makeVar)(function (_35) {
        return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff_Var.killVar(_35)(Control_Monad_Eff_Exception.error("DOA")))(function () {
            return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff.attempt(Control_Monad_Aff_Var.takeVar(_35)))(function (_34) {
                return Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Data_Either.either(Prelude["const"](Debug_Trace.trace("Success: Killed var dead")))(Prelude["const"](Debug_Trace.trace("Failure: Oh noes, Var survived!")))(_34));
            });
        });
    });
    var test_attempt = Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff.attempt(Control_Monad_Error_Class.throwError(Control_Monad_Aff.monadErrorAff)(Control_Monad_Eff_Exception.error("Oh noes!"))))(function (_31) {
        return Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Data_Either.either(Prelude["const"](Debug_Trace.trace("Success: Exception caught")))(Prelude["const"](Debug_Trace.trace("Failure: Exception NOT caught!!!")))(_31));
    });
    var test_apathize = Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff.apathize(Control_Monad_Error_Class.throwError(Control_Monad_Aff.monadErrorAff)(Control_Monad_Eff_Exception.error("Oh noes!"))))(function () {
        return Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Debug_Trace.trace("Success: Exceptions don't stop the apathetic"));
    });
    var main = Control_Monad_Aff.launchAff(Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Debug_Trace.trace("Testing sequencing")))(function () {
        return Prelude[">>="](Control_Monad_Aff.bindAff)(test_sequencing(3))(function () {
            return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Debug_Trace.trace("Testing pure")))(function () {
                return Prelude[">>="](Control_Monad_Aff.bindAff)(test_pure)(function () {
                    return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Debug_Trace.trace("Testing attempt")))(function () {
                        return Prelude[">>="](Control_Monad_Aff.bindAff)(test_attempt)(function () {
                            return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Debug_Trace.trace("Testing later")))(function () {
                                return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Aff.later(Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Debug_Trace.trace("Success: It happened later"))))(function () {
                                    return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Debug_Trace.trace("Testing apathize")))(function () {
                                        return Prelude[">>="](Control_Monad_Aff.bindAff)(test_apathize)(function () {
                                            return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Debug_Trace.trace("Testing Var - putVar, takeVar")))(function () {
                                                return Prelude[">>="](Control_Monad_Aff.bindAff)(test_putTakeVar)(function () {
                                                    return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Debug_Trace.trace("Testing killVar")))(function () {
                                                        return Prelude[">>="](Control_Monad_Aff.bindAff)(test_killVar)(function () {
                                                            return Prelude[">>="](Control_Monad_Aff.bindAff)(Control_Monad_Eff_Class.liftEff(Control_Monad_Aff.monadEffAff)(Debug_Trace.trace("Testing Par (<|>)")))(function () {
                                                                return test_parRace;
                                                            });
                                                        });
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }));
    return {
        main: main, 
        test_parRace: test_parRace, 
        test_killVar: test_killVar, 
        test_putTakeVar: test_putTakeVar, 
        test_apathize: test_apathize, 
        test_attempt: test_attempt, 
        test_pure: test_pure, 
        test_sequencing: test_sequencing, 
        timeout: timeout
    };
})();
PS.Examples.main();