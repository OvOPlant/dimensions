(function() {
    let old = globalThis.sdk_runtime;
    c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
    let runtime = globalThis.sdk_runtime;
    globalThis.sdk_runtime = old;
    var aaaa = runtime.groups_by_name["gameplay - timescale"].subevents[1].actions[1].parameters[0].object
    let notify = (title, text, image = "https://ovoplant.github.io/ovo/versions/reverse/velocity.png") => {
        cr.plugins_.sirg_notifications.prototype.acts.AddSimpleNotification.call(
            runtime.types_by_index.find(
                (type) => type.plugin instanceof cr.plugins_.sirg_notifications
            ).instances[0],
            title,
            text,
            image
        );
    };
    let timeScale = {
        init() {
            runtime.tickMe(TimeScale);
            var e = []
            globalThis.ovoTimescale = {loadInputs: function (t) { e = "number" == typeof t[0][0] ? t : t.map(function (t, n) { return [1 * n / 60, t] }) }, get loadedInputs() { return e }, playInputs: function () { timescale = 1; var t = 0, n = { tick: function () { var o = runtime.dt; for (t += o, console.log(t, o, e.length); 0 < e.length && t > e[0][0];)t -= 1 / 60, e.shift()[1].forEach(function (t) { "Restart" === t ? c2_callFunction("Menu > Replay") : "Jump" === t ? c2_callFunction("Controls > Buffer", ["Jump"]) : c2_callFunction("Controls > " + t) }); 0 === e.length && runtime.untickMe(n) } }; runtime.tickMe(n) }};
            notify("How to use", "In any way you can, change the variable 'timescale' to a number to change the game's timescale.",
            "https://ovoplant.github.io/ovo/versions/reverse/electric.png")
            setTimeout(function() {
                notify("TAS Keybinds", "This includes both versions of CTD's TAS Keybinds mod. To enable version 1, set 'tasKeybinds' to 1. To enable version 2, set 'tasKeybinds' to 2.")
            },4000)
            setTimeout(function() {
                notify("Wall Warping", "Set 'tasKeybinds' to 3 to activate wall warping. Too much to explain here, ask in the Discord if you need help.")
            },8000)
            setTimeout(function() {
                notify("Take notes", "Due to lack of a replay system, you'll have to quickly write your times somewhere",
                "https://ovoplant.github.io/ovo/versions/reverse/electric.png")
            },12000)
        },
    }
    timescale = 1
    var TSRestore, bindsHelp1, bindsHelp2, bindsHelp3, player;
    let TimeScale = {
        tick(){
            player = runtime.types_by_index.filter((x) =>!!x.animations &&x.animations[0].frames[0].texture_file.includes("collider"))[0].instances.filter((x) => x.instance_vars[18] === "")[0];
            if (timescale === null || timescale === "" || timescale < 0 || isNaN(timescale)){
                timescale = TSRestore
                notify("Oops", "You must set the timescale to a positive number.", "https://ovoplant.github.io/ovo/versions/reverse/electric.png")
            }   
            if (runtime.running_layout.sheetname === "Main" || runtime.running_layout.sheetname === "Reward"){
                runtime.groups_by_name["gameplay - timescale"].subevents[1].actions[1].parameters[0].object = aaaa
                runtime.timescale = 1
            }
            TSRestore = timescale
            if (runtime.running_layout.sheetname === "Levels"){
            if (!runtime.running_layout.layers.find(x=>x.name === "Pause").visible && !runtime.running_layout.layers.find(x=>x.name === "Dialogue").visible){
                if (runtime.running_layout.layers.find(x=>x.name === "Win").visible){
                    runtime.groups_by_name["gameplay - timescale"].subevents[1].actions[1].parameters[0].object = aaaa
                    runtime.timescale = 1
                }else{
                runtime.groups_by_name["gameplay - timescale"].subevents[1].actions[1].parameters[0].object = null
                runtime.timescale = timescale
                var i, len
                for (i = 0, len = aaaa.instances.length; i < len; i++){
                    
                        aaaa.instances[i].my_timescale = runtime.timescale
                }
            };
            }else if (runtime.running_layout.layers.find(x=>x.name === "Pause").visible || runtime.running_layout.layers.find(x=>x.name === "Dialogue").visible){
                runtime.groups_by_name["gameplay - timescale"].subevents[1].actions[1].parameters[0].object = aaaa
            }
        }
        if (tasKeybinds !== 3){
            b.style.opacity = 0
            clearInterval(bindsHelp3)
            bindsHelp3 = setInterval(function() {
                if (tasKeybinds === 3){
                    notify("yoooooo", "Q = 1<br/>A = 0.02<br/>Z = 0.001<br/>X = 0.0001<br/>C = 0.00001")
                    clearInterval(bindsHelp3)
                }
            })
        }else if (tasKeybinds === 3){
            b.style.opacity = 0.7
            b.innerHTML = player.x.toString() + "\n" + player.y.toString();
        }
    }
}
tasKeybinds = 0
setInterval(function() {
    if (tasKeybinds !== 1){
        clearInterval(bindsHelp1)
        bindsHelp1 = setInterval(function() {
            if (tasKeybinds === 1){
                notify("yoooooo", "set timescale with qweasdzxcv, t is tas jump, g is jump spam")
                clearInterval(bindsHelp1)
            }
        })
    }else if (tasKeybinds !== 2){
        clearInterval(bindsHelp2)
        bindsHelp2 = setInterval(function() {
            if (tasKeybinds === 2){
                notify("yoooooo", "Look at <a href='https://arjun99ab.github.io/ovo/src/mods/modloader/taskeybinds.png' target='_blank'>this image<a> for help.")
                clearInterval(bindsHelp2)
            }
        })
    }
})
    

// CoolTasDude's TAS Keybinds mod. To enable, set variable 'tasKeybinds' to 1.
document.addEventListener("keydown", (event) => {
    if (runtime.running_layout.sheetname === "Levels"){
        if (tasKeybinds === 1){
            if (event.code === "KeyA") {
                timescale = 0.2
                    notify("timescale set to 0.2");
                }
                if (event.code === "KeyS") {
                timescale = 0.05
                    notify("timescale set to 0.05");
                }
                if (event.code === "KeyD") {
                timescale = 0.02
                    notify("timescale set to 0.02");
                }
                if (event.code === "KeyQ") {
                timescale = 1
                    notify("timescale set to 1");
                }
                if (event.code === "KeyW") {
                timescale = 0.1
                    notify("timescale set to 0.1");
                }
                if (event.code === "KeyE") {
                timescale = 0.01
                    notify("timescale set to 0.01");
                }
                if (event.code === "KeyZ") {
                timescale = 2
                    notify("timescale set to 2");
                }
                if (event.code === "KeyX") {
                timescale = 0.5
                    notify("timescale set to 0.5");
                }
                if (event.code === "KeyC") {
                timescale = 0.005
                    notify("timescale set to 0.005");
                }
                if (event.code === "KeyV") {
                timescale = 0.003
                    notify("timescale set to 0.003");
                }
                if (event.code === "KeyT") {
                    ovoTimescale.loadInputs([["jump"],])
                    ovoTimescale.playInputs()
                    notify("tas jump inputed");
                }
                if (event.code === "KeyG") {
                    ovoTimescale.loadInputs([["Jump"],["Jump"],["Jump"],["Jump"],["Jump"],])
                    ovoTimescale.playInputs()
                    notify("auto mj inputed");
            }
        }else if (tasKeybinds === 2){
            if (event.code === "KeyQ") {
                timescale = 1
                notify("timescale set to 1");
            }
            if (event.code === "KeyW") {
                timescale = 0.5
                notify("timescale set to 0.5");
            }
            if (event.code === "KeyE") {
                timescale = 0.02
                notify("timescale set to 0.02");
            }
            if (event.code === "KeyA") {
                timescale = 0.2
                notify("timescale set to 0.2");
            }
            if (event.code === "KeyD") {
                if (event.shiftKey) {
                timescale = 0.07
                notify("timescale set to 0.07");
                } else {        
                timescale = 0.05
                notify("timescale set to 0.05");
                }
            }
            if (event.code === "KeyS") {
                timescale = 0.1
                notify("timescale set to 0.1");
            }
            if (event.code === "KeyX") {
                timescale *= 2
                notify("timescale set to " + timescale);
            }
            if (event.code === "KeyZ") {
                timescale *= 5
                notify("timescale set to " + timescale);
            }
            if (event.code === "KeyC") {
                timescale /= 2
                notify("timescale set to " + timescale);
            }
            if (event.code === "KeyV") {
                timescale /= 5
                notify("timescale set to " + timescale);
            }
            if(event.code === "KeyF") {
                if (event.shiftKey) {
                    ovoTimescale.loadInputs([["Down"],])
                    ovoTimescale.playInputs()
                    notify("down input inputed");
                } else {
                    ovoTimescale.loadInputs([["Jump"],["Jump"],["Jump"],["Jump"],["Jump"],])
                    ovoTimescale.playInputs()
                    notify("auto mj inputed");
                }
            }
        }else if (tasKeybinds === 3){
            if (event.code === "KeyQ") {
                timescale = 1
                  notify("timescale set to 1");
              }
              if (event.code === "KeyA") {
                timescale = 0.02
                  notify("timescale set to 0.02");
              }
           if (event.code === "KeyZ") {
                timescale = 0.001
                  notify("timescale set to 0.001");
              }
              if (event.code === "KeyX") {
                timescale = 0.0001
                  notify("timescale set to 0.0001");
              }
              if (event.code === "KeyC") {
                timescale = 0.00001
                  notify("timescale set to 0.00001");
              }          
        }
    }
});
  var b = document.createElement("div"),
    c = {
      backgroundColor: "rgba(150,10,1)",
      opacity: 0,
      width: "300px",
      height: "60px",
      position: "absolute",
      top: "100px",
      left: "100px",
      userSelect: "none",
      fontSize: "x-large",
    };
  Object.keys(c).forEach(function (a) {
    b.style[a] = c[a];
  });
  b.id = "TAS";
  var newContent = document.createTextNode("coords");

  // add the text node to the newly created div
  b.appendChild(newContent);

  document.body.appendChild(b);

    timeScale.init();
})();
