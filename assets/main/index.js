System.register("chunks:///_virtual/Answer.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Tools.ts","./GameplayCtrl.ts"],(function(e){var i,t,r,n,a,s,o,l,u,c,m,g,p,f;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,r=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){a=e.cclegacy,s=e._decorator,o=e.Label,l=e.Sprite,u=e.SpriteFrame,c=e.UITransform,m=e.Animation,g=e.Component},function(e){p=e.Tools},function(e){f=e.GameplayCtrl}],execute:function(){var h,b,d,w,y,k,T,z,F,A,C,x,S,v,D,L,I,R,_,G,H,U,M;a._RF.push({},"06981YLLgRMG6eXUmhsuQ1U","Answer",void 0);var O=s.ccclass,P=s.property;e("Answer",(h=O("Answer"),b=P(o),d=P(o),w=P(l),y=P(u),k=P(u),T=P(u),z=P(l),F=P(l),A=P(l),C=P(u),h((v=i((S=function(e){function i(){for(var i,t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return i=e.call.apply(e,[this].concat(a))||this,r(i,"index",v,n(i)),r(i,"title",D,n(i)),r(i,"image",L,n(i)),r(i,"frames",I,n(i)),r(i,"backgrouds",R,n(i)),r(i,"imageTitles",_,n(i)),r(i,"frame",G,n(i)),r(i,"backgroud",H,n(i)),r(i,"imageTitle",U,n(i)),i.maxWidth=190,i.maxHeight=190,r(i,"backgroudDefault",M,n(i)),i.dataAnswer=null,i.isClick=!1,i}t(i,e);var a=i.prototype;return a.SetData=function(e){this.dataAnswer=e,this.image.spriteFrame=e.imageAnswer,this.title.string=e.textAnswer,this.image.node.getComponent(c).setContentSize(p.resizeImage(this.maxWidth,this.maxHeight,e.imageAnswer))},a.SetIndex=function(e){this.index.string="0"+e},a.Onclick=function(){var e=this;1!=this.isClick&&1!=f.instance.isSwitchQuest&&(this.isClick=!0,0==this.dataAnswer.isTrue?(this.frame.spriteFrame=this.frames[1],this.backgroud.spriteFrame=this.backgrouds[1],this.imageTitle.spriteFrame=this.imageTitles[1],f.instance.Fail()):(this.frame.spriteFrame=this.frames[0],this.backgroud.spriteFrame=this.backgrouds[0],this.imageTitle.spriteFrame=this.imageTitles[0],f.instance.AddScore(),this.image.node.getComponent(m).play("Shake"),this.scheduleOnce((function(){e.image.node.getComponent(m).stop(),e.image.node.angle=0}),1)))},a.Reset=function(){this.image.node.getComponent(m).stop(),this.image.node.angle=0,this.isClick=!1,this.frame.spriteFrame=this.frames[0],this.backgroud.spriteFrame=this.backgroudDefault,this.imageTitle.spriteFrame=this.imageTitles[0]},i}(g)).prototype,"index",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=i(S.prototype,"title",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=i(S.prototype,"image",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=i(S.prototype,"frames",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),R=i(S.prototype,"backgrouds",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),_=i(S.prototype,"imageTitles",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),G=i(S.prototype,"frame",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),H=i(S.prototype,"backgroud",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=i(S.prototype,"imageTitle",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=i(S.prototype,"backgroudDefault",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=S))||x));a._RF.pop()}}}));

System.register("chunks:///_virtual/DataAnswer.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var r,t,i,n,a,o,s;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.initializerDefineProperty},function(e){i=e.cclegacy,n=e._decorator,a=e.SpriteFrame,o=e.CCString,s=e.CCBoolean}],execute:function(){var u,c,l,p,f,b,w,g,h;i._RF.push({},"d49c0R/hRRJjpRLA0Crkbim","DataAnswer",void 0);var A=n.ccclass,m=n.property;e("DataAnswer",(u=A("DataAnswer"),c=m(a),l=m(o),p=m(s),u((w=r((b=function(){t(this,"imageAnswer",w,this),t(this,"textAnswer",g,this),t(this,"isTrue",h,this)}).prototype,"imageAnswer",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=r(b.prototype,"textAnswer",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),h=r(b.prototype,"isTrue",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),f=b))||f));i._RF.pop()}}}));

System.register("chunks:///_virtual/DataGame.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,a,n,r;return{setters:[function(t){e=t.inheritsLoose},function(t){a=t.cclegacy,n=t._decorator,r=t.Component}],execute:function(){var o;a._RF.push({},"29b6duURzVGQqpQumumOkqr","DataGame",void 0);var u=n.ccclass;n.property,t("DataGame",u("DataGame")(o=function(t){function a(){return t.apply(this,arguments)||this}e(a,t);var n=a.prototype;return n.start=function(){},n.update=function(t){},a}(r))||o);a._RF.pop()}}}));

System.register("chunks:///_virtual/DataQuestion.ts",["./rollupPluginModLoBabelHelpers.js","cc","./DataAnswer.ts"],(function(t){var e,i,r,n,a,u,o;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.initializerDefineProperty},function(t){r=t.cclegacy,n=t._decorator,a=t.SpriteFrame,u=t.CCString},function(t){o=t.DataAnswer}],execute:function(){var s,c,l,p,f,b,D,g,Q;r._RF.push({},"55344OEaRxKD4ItU2cWQ5rW","DataQuestion",void 0);var h=n.ccclass,y=n.property;t("DataQuestion",(s=h("DataQuestion"),c=y(a),l=y(u),p=y(o),s((D=e((b=function(){i(this,"imageQuest",D,this),i(this,"textQuest",g,this),i(this,"answers",Q,this)}).prototype,"imageQuest",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),g=e(b.prototype,"textQuest",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Q=e(b.prototype,"answers",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),f=b))||f));r._RF.pop()}}}));

System.register("chunks:///_virtual/GameplayCtrl.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Answer.ts","./DataQuestion.ts","./Tools.ts"],(function(e){var t,i,n,s,r,u,o,a,l,h,c,m,d,f,g,p,C,b,y;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,s=e.assertThisInitialized},function(e){r=e.cclegacy,u=e._decorator,o=e.Label,a=e.ProgressBar,l=e.Node,h=e.Prefab,c=e.UITransform,m=e.Size,d=e.instantiate,f=e.tween,g=e.Tween,p=e.Component},function(e){C=e.Answer},function(e){b=e.DataQuestion},function(e){y=e.Tools}],execute:function(){var T,w,Q,v,S,P,A,x,B,R,N,G,z,k,M,D,L,O,q,E;r._RF.push({},"78f3e9rE2FMbqtQ6lsTsxVc","GameplayCtrl",void 0);var F=u.ccclass,V=u.property;e("GameplayCtrl",(T=F("GameplayCtrl"),w=V(o),Q=V(o),v=V(a),S=V(l),P=V(h),A=V(b),x=V(l),B=V(l),T(((E=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),u=0;u<i;u++)r[u]=arguments[u];return t=e.call.apply(e,[this].concat(r))||this,n(t,"titleQuestion",G,s(t)),n(t,"titleLogo",z,s(t)),n(t,"time",k,s(t)),n(t,"answers",M,s(t)),n(t,"answer",D,s(t)),n(t,"questions",L,s(t)),n(t,"blockNode",O,s(t)),n(t,"bell",q,s(t)),t.dataQuestionCurrent=null,t.indexQuestionCurrent=0,t.isSwitchQuest=!1,t.numberQuestionCurrent=0,t.turn=null,t.stage=1,t.timeCurrent=30,t.timeMax=30,t.scheduleTime=null,t.score=0,t.isBotPlay=!1,t.isPlayer=!1,t}i(t,e);var r=t.prototype;return r.onLoad=function(){t.instance=this},r.start=function(){this.ShuffleQuestion(),this.GenerateAnswer(),this.ResetTime()},r.SetDataQuestionCurrent=function(){this.dataQuestionCurrent=this.questions[this.indexQuestionCurrent],this.indexQuestionCurrent++},r.ShuffleQuestion=function(){this.questions=y.shuffleArray(this.questions)},r.GenerateAnswer=function(){this.SetDataQuestionCurrent(),this.isSwitchQuest=!1,this.score=0,this.titleQuestion.string=this.dataQuestionCurrent.textQuest,this.answers.destroyAllChildren();var e=this.dataQuestionCurrent.answers.length;this.dataQuestionCurrent.answers=y.shuffleArray(this.dataQuestionCurrent.answers),e<6?this.answers.getComponent(c).setContentSize(new m(510,100)):e<8?this.answers.getComponent(c).setContentSize(new m(780,100)):this.answers.getComponent(c).setContentSize(new m(1050,100));for(var t=0;t<e;t++){var i=d(this.answer);this.answers.addChild(i),i.getComponent(C).SetIndex(t+1),i.getComponent(C).SetData(this.dataQuestionCurrent.answers[t])}},r.SetTime=function(){var e=this;this.scheduleTime&&this.unschedule(this.scheduleTime),this.scheduleTime=function(){e.timeCurrent--,console.log(1-e.timeCurrent/e.timeMax),f(e.time).to(1,{progress:1-e.timeCurrent/e.timeMax}).call((function(){})).start(),-1==e.timeCurrent&&e.CallbackTime()},this.scheduleTime(),this.schedule(this.scheduleTime,1)},r.CallbackTime=function(){var e=this;this.unschedule(this.scheduleTime),g.stopAllByTarget(this.time),1==this.stage?this.RunStage2():2==this.stage?this.RunStage3():3==this.stage&&(0==this.isBotPlay?this.scheduleOnce((function(){e.BotPlay()}),1):0==this.isPlayer?this.scheduleOnce((function(){e.PlayerPlay()}),1):this.NextQuestion())},r.ResetStage3=function(){this.turn=null,this.isBotPlay=!1,this.bell.active=!0,this.isPlayer=!1,this.blockNode.active=!0,this.time.node.active=!1,this.GenerateAnswer(),this.ResetTime()},r.RunStage2=function(){this.stage=2,this.indexQuestionCurrent=6,this.numberQuestionCurrent=5,this.time.progress=0,this.GenerateAnswer(),this.ResetTime(),this.titleLogo.string="VÒNG TĂNG TỐC"},r.AddScore=function(){this.score++,this.score<this.GetScoreMax()||this.NextQuestion()},r.NextQuestion=function(){var e=this;this.isSwitchQuest=!0,this.numberQuestionCurrent++,this.scheduleOnce((function(){5==e.numberQuestionCurrent?(e.unschedule(e.scheduleTime),g.stopAllByTarget(e.time),e.RunStage2()):e.numberQuestionCurrent<5||e.numberQuestionCurrent>5&&e.numberQuestionCurrent<9?(e.unschedule(e.scheduleTime),g.stopAllByTarget(e.time),e.SetTime(),e.GenerateAnswer()):9==e.numberQuestionCurrent?(e.unschedule(e.scheduleTime),g.stopAllByTarget(e.time),e.RunStage3()):e.numberQuestionCurrent>9&&e.numberQuestionCurrent<12?(e.unschedule(e.scheduleTime),g.stopAllByTarget(e.time),e.ResetStage3()):12==e.numberQuestionCurrent&&(e.unschedule(e.scheduleTime),g.stopAllByTarget(e.time),console.log("Full"))}),1)},r.Fail=function(){var e=this;3==this.stage?(this.unschedule(this.scheduleTime),g.stopAllByTarget(this.time),0==this.isBotPlay?this.scheduleOnce((function(){e.BotPlay()}),1):0==this.isPlayer?this.scheduleOnce((function(){e.PlayerPlay()}),1):this.NextQuestion()):this.NextQuestion()},r.RunStage3=function(){this.unschedule(this.scheduleTime),g.stopAllByTarget(this.time),this.stage=3,this.indexQuestionCurrent=10,this.numberQuestionCurrent=9,this.blockNode.active=!0,this.bell.active=!0,this.GenerateAnswer(),this.time.progress=0,this.time.node.active=!1,this.titleLogo.string="VÒNG VỀ ĐÍCH",this.blockNode.active=!0,this.bell.active=!0},r.GetScoreMax=function(){var e=0;return this.dataQuestionCurrent.answers.forEach((function(t){1==t.isTrue&&e++})),e},r.ResetTime=function(){this.unschedule(this.scheduleTime),g.stopAllByTarget(this.time),this.time.progress=0,1==this.stage&&(this.timeCurrent=30,this.timeMax=30),2==this.stage&&(this.timeCurrent=10,this.timeMax=10),3==this.stage&&(this.timeCurrent=5,this.timeMax=5),this.SetTime()},r.BtnBell=function(){1!=this.isPlayer&&(this.blockNode.active=!1,this.isPlayer=!0,this.PlayerPlay())},r.BotPlay=function(){var e=this;this.score=0,this.blockNode.active=!0,this.answers.children.forEach((function(e){e.getComponent(C).Reset()})),this.bell.active=!1,this.isBotPlay=!0,this.turn=1,this.time.node.active=!0,this.ResetTime();var t=1;this.answers.children.forEach((function(i){1==i.getComponent(C).dataAnswer.isTrue&&(e.scheduleOnce((function(){i.getComponent(C).Onclick()}),.5*t),t++)}))},r.PlayerPlay=function(){this.score=0,this.answers.children.forEach((function(e){e.getComponent(C).Reset()})),this.time.node.active=!0,this.ResetTime(),this.isPlayer=!0},t}(p)).instance=null,G=t((N=E).prototype,"titleQuestion",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=t(N.prototype,"titleLogo",[Q],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),k=t(N.prototype,"time",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=t(N.prototype,"answers",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=t(N.prototype,"answer",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),L=t(N.prototype,"questions",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),O=t(N.prototype,"blockNode",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),q=t(N.prototype,"bell",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),R=N))||R));r._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Answer.ts","./DataAnswer.ts","./DataGame.ts","./DataQuestion.ts","./GameplayCtrl.ts","./Tools.ts"],(function(){return{setters:[null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/Tools.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var r,n,e,o,c;return{setters:[function(t){r=t.inheritsLoose},function(t){n=t.cclegacy,e=t._decorator,o=t.Size,c=t.Component}],execute:function(){var i;n._RF.push({},"708c77+pcJIhK7yxiGm0cFv","Tools",void 0);var u=e.ccclass;e.property,t("Tools",u("Tools")(i=function(t){function n(){return t.apply(this,arguments)||this}return r(n,t),n.resizeImage=function(t,r,n){var e=0,c=0,i=n.rect.width/n.rect.height;return i>1?(c=t,e=t/i):(e=r,c=r*i),new o(c,e)},n.shuffleArray=function(t){for(var r=t.length,e=0;e<r;e++){var o=n.getRandomInt(0,r),c=[t[o],t[e]];t[e]=c[0],t[o]=c[1]}return t},n.getRandomInt=function(t,r){return Math.floor(Math.random()*(r-t))+t},n}(c))||i);n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});