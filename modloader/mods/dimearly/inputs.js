if(window.location.href.includes("early")){
(function () {
    let old = globalThis.sdk_runtime;
    c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
    let runtime = globalThis.sdk_runtime;
    globalThis.sdk_runtime = old;
    let inputing = runtime.types_by_index.find(x=>x.plugin instanceof cr.plugins_.Globals && x.instvar_sids.length === 6).instances[0].instance_vars
    var aaaa
    var timescale
    let notify = (title, text, image = "./velocity.png") => {
        cr.plugins_.sirg_notifications.prototype.acts.AddSimpleNotification.call(
            runtime.types_by_index.find(
                (type) => type.plugin instanceof cr.plugins_.sirg_notifications
            ).instances[0],
            title,
            text,
            image
        );
    };

    let inputs = {
        init() {
            
            globalThis.ovoInputs = this;
            notify("Inputs mod loaded", "Press ctrl + backquote (above tab).");
            document.addEventListener("keydown", userInput);
        },
    }
    function userInput(event){
        if (event.code === "Backquote"){
            if (event.ctrlKey){
                runtime.groups_by_name["player > controls > inputs"].initially_activated = false
                runtime.groups_by_name["player > controls > inputs"].group_active = false
                aaaa = runtime.groups_by_name["gameplay - timescale"].subevents[1].actions[1].parameters[0].object
                runtime.groups_by_name["gameplay - timescale"].subevents[1].actions[1].parameters[0].object = null
                var i, len
                for (i = 0, len = aaaa.instances.length; i < len; i++){       
                    aaaa.instances[i].my_timescale = 0}
                notify("Which input?", "Press an input you wish to change (i.e press your UP key to change your UP input). Or press ctrl + ` again to cycle through in order.")
                document.addEventListener("keydown", whichInput)
                document.removeEventListener("keydown", userInput)
            }
        }
    }
    function whichInput(event){
        if (event.keyCode === inputing[0]){
            notify("Left Input", "Press any key to replace your left key.")
            document.addEventListener("keydown", leftInput)
            document.removeEventListener("keydown", whichInput)
        }else if (event.keyCode === inputing[1]){
            notify("Up Input", "Press any key to replace your up key.")
            document.addEventListener("keydown", upInput)
            document.removeEventListener("keydown", whichInput)
        }else if (event.keyCode === inputing[2]){
            notify("Right Input", "Press any key to replace your right key.")
            document.addEventListener("keydown", rightInput)
            document.removeEventListener("keydown", whichInput)
        }else if (event.keyCode === inputing[3]){
            notify("Down Input", "Press any key to replace your down key.")
            document.addEventListener("keydown", downInput)
            document.removeEventListener("keydown", whichInput)
        }else if (event.code === "Backquote" && event.ctrlKey){
            notify("Left Input", "Press any key to replace your LEFT key")
            document.addEventListener("keydown", leftInput2)
            document.removeEventListener("keydown", whichInput)
        }
    }

    function leftInput(event){
        inputing[0] = event.keyCode
        runtime.groups_by_name["gameplay - timescale"].subevents[1].actions[1].parameters[0].object = aaaa
        runtime.groups_by_name["player > controls > inputs"].initially_activated = true
        runtime.groups_by_name["player > controls > inputs"].group_active = true
        if (event.code === "KeyR" || event.code === "KeyP" || event.code === "Escape"){
            notify("Uhmm...", "Good luck playing... I guess?")
        }else{notify("Input changed", "Enjoy your new left key")}
        document.addEventListener("keydown", userInput)
        document.removeEventListener("keydown", leftInput)
    }
    function upInput(event){
        inputing[1] = event.keyCode
        runtime.groups_by_name["gameplay - timescale"].subevents[1].actions[1].parameters[0].object = aaaa
        runtime.groups_by_name["player > controls > inputs"].initially_activated = true
        runtime.groups_by_name["player > controls > inputs"].group_active = true
        if (event.code === "KeyR" || event.code === "KeyP" || event.code === "Escape"){
            notify("Uhmm...", "Good luck playing... I guess?")
        }else{notify("Input changed", "Enjoy your new up key")}
        document.addEventListener("keydown", userInput)
        document.removeEventListener("keydown", upInput)
    }
    function rightInput(event){
        inputing[2] = event.keyCode
        runtime.groups_by_name["gameplay - timescale"].subevents[1].actions[1].parameters[0].object = aaaa
        runtime.groups_by_name["player > controls > inputs"].initially_activated = true
        runtime.groups_by_name["player > controls > inputs"].group_active = true
        if (event.code === "KeyR" || event.code === "KeyP" || event.code === "Escape"){
            notify("Uhmm...", "Good luck playing... I guess?")
        }else{notify("Input changed", "Enjoy your new right key")}
        document.addEventListener("keydown", userInput)
        document.removeEventListener("keydown", rightInput)
    }
    function downInput(event){
        inputing[3] = event.keyCode
        runtime.groups_by_name["gameplay - timescale"].subevents[1].actions[1].parameters[0].object = aaaa
        runtime.groups_by_name["player > controls > inputs"].initially_activated = true
        runtime.groups_by_name["player > controls > inputs"].group_active = true
        if (event.code === "KeyR" || event.code === "KeyP" || event.code === "Escape"){
            notify("Uhmm...", "Good luck playing... I guess?")
        }else{notify("Input changed", "Enjoy your new down key")}
        document.addEventListener("keydown", userInput)
        document.removeEventListener("keydown", downInput)
    }

    
    function leftInput2(event){
        inputing[0] = event.keyCode
        document.addEventListener("keydown", upInput2)
        notify("Up Input", "Press any key to replace your UP key")
        document.removeEventListener("keydown", leftInput2)
    }

    function upInput2(event){
        inputing[1] = event.keyCode
        document.addEventListener("keydown", rightInput2)
        notify("Right Input", "Press any key to replace your RIGHT key")
        document.removeEventListener("keydown", upInput2)
    }

    function rightInput2(event){
        inputing[2] = event.keyCode
        document.addEventListener("keydown", downInput2)
        notify("Down Input", "Press any key to replace your DOWN key")
        document.removeEventListener("keydown", rightInput2)
    }

    function downInput2(event){
        inputing[3] = event.keyCode
        setTimeout(function() {
            runtime.groups_by_name["gameplay - timescale"].subevents[1].actions[1].parameters[0].object = aaaa}, 100)
        runtime.groups_by_name["player > controls > inputs"].initially_activated = true
        runtime.groups_by_name["player > controls > inputs"].group_active = true
        document.addEventListener("keydown", userInput)
        notify("Inputs set!", "To change them again, press the same keys (ctrl + `)")
        document.removeEventListener("keydown", downInput2)
    }

    
    inputs.init();
})()}
else{
    ovoModLoader.notify("Not here.", "This is only for the earliest version.")
}