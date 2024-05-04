(function(){
    const runtime = cr_getC2Runtime();
    function notify(title, text, image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAG/SURBVFhHtZLRUcNADETTD01QAB3QFZXQC39QAz/M8MVHuHX8NGtZ57sksDNv4pyk1fqS0w06D/gXVYvOP9/P5blxt3amD49vgQIIP6tmGjdpY+JLoArgJI+rFIOVsRgtB/dqTGlpHpnP1AHPlUMtTdlAVAvymZPreK+UigYfFB7C+ypyv5N6dwqDChnSM6JaDta3URQOBjY8vX/toEbY7FX4haYG8sKX83l3Jnxm4BkaNuclWi5eE4Sa8WwsmmmMpb7swz55FurzWXnxxwSrX34zJwfwt9aiz/UT9J0z9fgtVL56xrtxefAizdRYToCeVOMGCODeDrXGvokQ1FjOdfekGiHuCiA8RL7+I/1ZAJEDcAO9ECznxjQrj8qbvY1+AGo5QC+Evz03wE1WrP79AIK6hwAPw3ICMNfz9gBSt5Eab0UQwlTPHuDIsxGaad6E8CAsBfr1lgPPUBwOBhZ8meM9/M4Dr42WwzyAEfVZrnl7FEUfmHiLDd5HeDxSb6locAM3rRj1qO7ejUNFY2VWMQrgno0pxUBlCDM35F6NqxSDlbE4Wu7zKzdpZ+RLejdQzN2tynSGf1G1yLlCp9MvfdzWwjkzUNQAAAAASUVORK5CYII=") {
        cr.plugins_.sirg_notifications.prototype.acts.AddSimpleNotification.call(
            runtime.types_by_index.find(
                (type) => type.plugin instanceof cr.plugins_.sirg_notifications
            ).instances[0],
            title,
            text,
            image
        );
    }
    if (runtime.running_layout.name !== "Main"){
        runtime.changelayout = runtime.layouts["Main"]
        return notify("Oops, wrong place", "For version detection reasons, please activate this mod on the main menu.");
    }else{
        notify("Successfully Reversified!", "If you think something's wrong, contact me on Discord. Enjoy!")
    }
    function create(spriteType, x, y, width, height, angle, visible, instvar) {

        const sprite = runtime.createInstance(spriteType, getLayer, x, y);
        if(spriteType===getSpring){
            sprite.instance_vars[6] = height
        }
        sprite.width = width || sprite.width;
        sprite.height = height || sprite.height;
        if(angle===0){sprite.angle=0}else{sprite.angle = angle*(Math.PI/180) || sprite.angle}
        if(visible===0){sprite.visible=0}else{sprite.visible = visible || sprite.visible}
        if(spriteType===getButton || spriteType===getSpring){
            if(instvar===0){sprite.instance_vars[0]=0}else{sprite.instance_vars[0] = instvar || sprite.instance_vars[0]}
        }
        sprite.set_bbox_changed();
        return sprite;
    }

    function createM(x, y, width, height, angle, id, command, macc) {

        const sprite = runtime.createInstance(getMovearea, getLayer, x, y);
        sprite.width = width || sprite.width;
        sprite.height = height || sprite.height;
        if(angle===0){sprite.angle = 0}else{sprite.angle = angle*(Math.PI/180) || sprite.angle}
        if(getPlayer.visible){sprite.visible = 1}
        if(id===0){sprite.instance_vars[5]=0}else{sprite.instance_vars[5] = id || sprite.instance_vars[5]}
        sprite.instance_vars[6] = 1;
        sprite.behavior_insts[1].CmdQueue.queue = command;
        sprite.behavior_insts[1].CmdMove.move.acc = macc || sprite.behavior_insts[1].CmdMove.move.acc;
        sprite.behavior_insts[1].CmdRotate.rotatable = false;
        sprite.set_bbox_changed();
        return sprite;
    }

    function destroy(instance) {
        runtime.DestroyInstance(instance)
    }

    var i, i2;
    const angle = (Math.PI/180)
    const getSpring = runtime.types_by_index.find(x=>x.animations && x.animations[0].frames[0].texture_file.includes("jumpboost"));
    const getHash = runtime.types_by_index.find(x=>x.texture_file && x.texture_file.includes("jumpthrough"));
    const getText = runtime.types_by_index.find(x=>x.default_instance && x.default_instance[0]  && x.default_instance[0].includes(604) && x.texture_file && x.texture_file.includes("spritefontdeluxe"));
    const getSpike = runtime.types_by_index.find(x=>x.animations && x.animations[0].frames[0].texture_file.includes("spike"));
    const getButton = runtime.types_by_index.find(x=>x.animations && x.animations[0].frames[0].texture_file.includes("buttontrigger"));
    const getMovearea = runtime.types_by_index.find(x=>x.animations && x.animations[0].frames[0].texture_file.includes("movearea"));
    const getSolid = runtime.types_by_index.find(x=>x.behs_count===2 && x.texture_file && x.texture_file.includes("/solid.png"));
    const getRocket = runtime.types_by_index.find(x=>x.animations && x.animations[0].frames[0].texture_file.includes("rocketlauncher"));
    const getCoin = runtime.types_by_index.find(x=>x.animations && x.animations[0].frames[0].texture_file.includes("coin"));
    const getPortal = runtime.types_by_index.find(x=>x.animations && x.animations[0].frames[0].texture_file.includes("portal"));
    const getGrav = runtime.types_by_index.find(x=>x.texture_file && x.texture_file.includes("tiledbackground"));
    const getUSolid = runtime.types_by_index.find(x=>x.behs_count===1 && x.texture_file && x.texture_file.includes("/solid.png"));
    const models = runtime.types_by_index.find(x=>x.meshBank && x.default_instance[0][0]);
    const getInfo = runtime.types_by_index.find(x=>x.animations && x.animations[0].frames[0].texture_file.includes("info2d"));
    var getLayer, getPlayer, getFlag;
    c2_callFunction("Gameplay > Death")
    if (runtime.running_layout.layers.find(x=>x.name==="UITitle")){
        var version = runtime.running_layout.layers.find(x=>x.name==="UITitle").instances[5].text
    }else{
        notify("Unnecessary", "Why not just play <a href='https://ovoreverse.netlify.app/' target='_blank'>OvO Reverse<a>?")
    }
    const sg = getSpring.instances, h = getHash.instances, sp = getSpike.instances, b = getButton.instances, m = getMovearea.instances, s = getSolid.instances, r = getRocket.instances, c = getCoin.instances, p = getPortal.instances, g = getGrav.instances, us = getUSolid.instances, mo = models.instances[0].objs, instvars = "instance_vars";
    const reverse = {
        tick(){
            if (runtime.changelayout){
                if (runtime.changelayout.sheetname === "Main"){
                    setTimeout(function() {
                        var titlever = runtime.running_layout.layers.find(y=>y.name==="UITitle").instances[5], names = runtime.running_layout.layers.find(x=>x.name==="UI1").instances[95];
                        titlever.text = titlever.text + "R"; titlever.text_changed = true;
                        runtime.running_layout.layers.find(x=>x.name==="UISticky").instances.forEach(x=>x[instvars][3] = x[instvars][3] * -1)
                        names.x = -1144; names.width *= -1; names.set_bbox_changed()
                    },0.1)
                }else if (runtime.changelayout.sheetname === "Levels"){
                    setTimeout(function() {
                        getPlayer = runtime.types_by_index.find(x=>x.animations && x.animations[0].frames[0].texture_file.includes("collider")).instances[0];
                        getFlag = runtime.types_by_index.find(x=>x.animations && x.animations[0].frames[0].texture_file.includes("endflag")).instances[0];
                        getLayer = runtime.running_layout.layers.find(x=>x.name==="Layer 0");
                        setTimeout(function() {getFlag.width = getFlag.width*-1;
                            getCoin.instancs[0].width = c.width*-1;
                        },0.2)
                        if (runtime.running_layout.name !== "Level 40" && runtime.running_layout.name !== "Level 57"){
                        getLayer.initial_instances.forEach(x=>{if(x[2] !== getFlag.uid){return;}else{getPlayer.x = x[0][0]; getPlayer.y = x[0][1]}});
                        getLayer.initial_instances.forEach(x=>{if(x[3][0][0] !== "run"){return;}else{getFlag.x = x[0][0]; getFlag.y = x[0][1]}});
                        }
                        getLayer.instances.forEach(x=>x.set_bbox_changed())
                        if (runtime.running_layout.name === "Level 2"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                p[1].x = 1246
                            }
                        }else if (runtime.running_layout.name === "Level 5"){
                            if (version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                b[0].x = 1670
                                m[0].behavior_insts[1].CmdQueue.queue = [{"cmd":"W","param":2,"speed":null},{"cmd":"M","param":256,"speed":null}]
                                m[2].behavior_insts[1].CmdQueue.queue = [{"cmd":"M","param":256,"speed":null}]
                            }
                        }else if (runtime.running_layout.name === "Level 8"){
                            if (version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                p[1].x = 1400; p[1].y = 970
                            }
                        }else if (runtime.running_layout.name === "Level 9"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                p[1].x = 1740
                                var spring0 = create(getSpring, 100, 100, 48, 48, 0, 1)
                                spring0[instvars][8] = 1784; spring0[instvars][9] = 944;
                                setTimeout(function() {spring0[instvars][8] = 1600; spring0[instvars][9] = 950},10) // I spawn the spring on top of the player before moving it because the 3D spring model doesn't show up until the spring bounces.
                            }
                        }else if (runtime.running_layout.name === "Level 10"){
                            if(version==="1.0.2"){
                                h[0].width = 150; h[0].y = 854;
                                s[13].y = 818;
                                s[8].y = 810;
                                p[1].x = 2391; p[1].y = 650;
                            }else if(version==="1.0.1"){
                                s[7].height = 184; s[7].y = 896;
                                s[8].y = 888;
                                p[1].x = 2391; p[1].y = 650;
                            }else if(version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                s[7].height = 184; s[7].y = 896;
                                s[8].y = 888;
                                p[1].x = 2840; p[1].y = 650;
                            }
                        }else if (runtime.running_layout.name === "Level 13"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                            var spring0 = create(getSpring, 100, 100, 48, 48, 0, 1, 0.7)
                            spring0[instvars][8] = 1848; spring0[instvars][9] = 448;
                            setTimeout(function() {
                                if(version==="1.0.2"){
                                    spring0[instvars][8] = 424; spring0[instvars][9] = 488
                                }else if(version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                    spring0[instvars][8] = 536; spring0[instvars][9] = 488
                                }},10)
                            }
                        }else if (runtime.running_layout.name === "Level 18"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                            sg[0][instvars][0] = 0.6
                            }
                        }else if (runtime.running_layout.name === "Level 19"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                var spring0 = create(getSpring, 100, 100, 48, 48, 0, 1, 0.8)
                                spring0[instvars][8] = 3440; spring0[instvars][9] = 896;
                                setTimeout(function() {spring0[instvars][8] = 3148; spring0[instvars][9] = 968},10)
                            }
                        }else if (runtime.running_layout.name === "Level 20"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                var spring0 = create(getSpring, 100, 100, 48, 48, 0, 1, 0.75), spring1 = create(getSpring, 100, 100, 48, 48, 0, 1, 0.7);
                                spring0[instvars][8] = 2264; spring0[instvars][9] = 1056;
                                spring1[instvars][8] = 2264; spring1[instvars][9] = 1056;
                                sg[0].angle = 0; sg[7].angle = 0
                                setTimeout(function() {spring0[instvars][8] = 2264; spring0[instvars][9] = 1128; spring1[instvars][8] = 952; spring1[instvars][9] = 1376},10)
                            }
                        }else if (runtime.running_layout.name === "Level 22"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                var spring0 = create(getSpring, 100, 100, 72, 72, 0, 1, 0.75)
                                spring0[instvars][8] = 3416; spring0[instvars][9] = 704;
                                setTimeout(function() {spring0[instvars][8] = 1296; spring0[instvars][9] = 1420;},10)
                                create(getSolid, 3296, 808, null, 160, -90)
                                destroy(h[0])
                            }
                        }else if (runtime.running_layout.name === "Level 23"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                m[0].x = 1696; m[0].angle = 180 * angle; m[0].behavior_insts[1].CmdQueue.queue[0].param = 800; m[0].behavior_insts[1].CmdQueue.repeatCountSave = 1
                                b[0].x = 1740
                            }
                        }else if (runtime.running_layout.name === "Level 24"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                sg[1].x = 3056; sg[1].y = 1380; sg[1][instvars][8] = 2796; sg[1][instvars][9] = 1386; sg[1].angle = 0; sg[1][instvars][0] = 1.1
                                sg[0].x = 3056; sg[0].y = 1380; sg[0][instvars][8] = 754; sg[0][instvars][9] = 1340; sg[0][instvars][0] = 0.45
                            }
                        }else if (runtime.running_layout.name === "Level 27"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                var spring0 = create(getSpring, 100, 100, 32, 32)
                                spring0[instvars][8] = 1800; spring0[instvars][9] = 160;
                                setTimeout(function() {spring0[instvars][8] = 1408; spring0[instvars][9] = 1346},10)
                            }
                        }else if (runtime.running_layout.name === "Level 30"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                var spring0 = create(getSpring, 100, 100, 130, 32, 0, 1, 1.25)
                                spring0[instvars][8] = 3376; spring0[instvars][9] = 4408;
                                setTimeout(function() {spring0[instvars][8] = 3380; spring0[instvars][9] = 4488},10)
                            }
                        }else if (runtime.running_layout.name === "Level 31"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                destroy(sp[23])
                            }
                        }else if (runtime.running_layout.name === "Level 32"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                sp.filter(x=>x.y===368&&x.zindex%2===0).forEach(x=>destroy(x)) // I do this instead of moving the spring because springs facing left just dont work.
                                sg[2].x = 1576; sg[2].y = 920; sg[2][instvars][8] = 1572; sg[2][instvars][9] = 980; sg[2].angle = 0; sg[2][instvars][0] = 0.95; sg[2].width = 230
                            }
                        }else if (runtime.running_layout.name === "Level 33"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                m[0].x = 4200;
                                m.forEach(x=>{x.behavior_insts[1].currentCmd = null; x.behavior_insts[1].CmdQueue.queue[0].param = x.behavior_insts[1].CmdQueue.queue[0].param * -1; setTimeout(function() {x.behavior_insts[1].isRun = true},20)})
                                setTimeout(function() {if (m[0].behavior_insts[1].CmdQueue.queue[0].param !== -200){c2_callFunction("Menu > Replay")}},30)
                            }
                        }else if (runtime.running_layout.name === "Level 34"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                i = 0; h.forEach(x=>{if(i>0 && i<6){create(getSolid, x.x, x.y+8, 8, x.width, -90)}; i++})
                                m[5].angle = 180*angle; m[5].x = 2578; m[5].y = 448;
                                b[2].x = 2344; b[2].y = 472; b[2].height = 250; b[2].visible = false;
                                destroy(s[4]);
                                b[1].y = 655;
                                m[2].x = 444;
                                create(getUSolid, 1128, 608, -112, -8, 0)
                            }
                        }else if (runtime.running_layout.name === "Level 35"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                b.filter(x=>x[instvars][0]===20).forEach(x=>destroy(x));
                                m[0].x = 4788;
                                i = 0; m.forEach(x=>{if (i < 2){x.behavior_insts[1].currentCmd = null; x.behavior_insts[1].CmdQueue.queue[0].param = x.behavior_insts[1].CmdQueue.queue[0].param * -1; setTimeout(function() {x.behavior_insts[1].isRun = true},20)}; i++})
                                create(getButton, 1267, 368, 24, 216, null, 0, 20);
                                b.find(x=>x[instvars][0]===10).x = 743
                                b.find(x=>x[instvars][0]===3).x = 1676
                                setTimeout(function() {if (m[0].behavior_insts[1].CmdQueue.queue[0].param !== -200){c2_callFunction("Menu > Replay")}},30)
                            }
                        }else if (runtime.running_layout.name === "Level 36"){ 
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                m[0].x = 4900; m[0].behavior_insts[1].CmdQueue.queue[0].param = -5000
                                b[0].x = 4800
                            }
                        }else if (runtime.running_layout.name === "Level 37"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                b[0].x = 2344; b[0].y = 1239;
                            }
                        }else if (runtime.running_layout.name === "Level 38"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                var m12q = m[12].behavior_insts[1].CmdQueue.queue;
                                m[12].y = -38; m[12].angle = 180*angle; m12q[1].param = 90; m12q[2].param = 900;
                                b.filter(x=>x[instvars][0]===10).forEach(x=>destroy(x)); b.filter(x=>x[instvars][0]===20).forEach(x=>destroy(x));
                                create(getButton, 1125, 87, 24, 200, null, 0, 20); create(getButton, 1125, 87, 24, 200, null, 0, 10);
                            }
                        }else if (runtime.running_layout.name === "Level 39"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                getFlag.x = -170
                                destroy(sp[91]);
                                createM(-170, 2280, 24, 24, 0, 4, [{"cmd":"R","param":90,"speed":100000},{"cmd":"M","param":1250,"speed":100000000}]);
                                m[0].y = 2116; m[3].x = 39483290843290; m[4].x = 39483290843290; m[5][instvars][5] = 4; m[6][instvars][5] = 1;
                                b[0][instvars][0] = 4; b[1][instvars][0] = 1
                                b[2].x = 3028; b[2].y = 1845; b[2][instvars][0] = 2
                                s[65].width = 150;
                            }
                        }else if (runtime.running_layout.name === "Level 40"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                m.filter(x=>x.y===1000).forEach(x=>{x.behavior_insts[1].AddCommand("W", x.behavior_insts[1].CmdQueue.queue[0].param - 1); x.behavior_insts[1].AddCommand("B", 304)})
                                m.filter(x=>x.y===800).forEach(x=>{x.behavior_insts[1].AddCommand("W", 5); x.behavior_insts[1].AddCommand("B", 304)})
                                m[74][instvars][5] = 1; m[74].behavior_insts[1].CmdQueue.queue[0].param = 6
                                m[75][instvars][5] = 3; m[75].behavior_insts[1].CmdQueue.queue[0].param = 8
                                b[0][instvars][0] = 2; b[1][instvars][0] = 3; b[2][instvars][0] = 1;
                            }
                        }else if (runtime.running_layout.name === "Level 41"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                p[4][instvars][5] = -1;
                                p[5][instvars][5] = 5;
                                p[3][instvars][5] = 3;
                                p[2][instvars][5] = -1
                            }
                        }else if (runtime.running_layout.name === "Level 42"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                p[4][instvars][5] = -1; p[4].y = 501; p[4][instvars][6] = 1; p[4][instvars][7] = 225;
                                p[5][instvars][5] = 5;
                                p[3][instvars][5] = 3;
                                p[2][instvars][5] = -1;
                                p[1][instvars][5] = 1;
                                p[0][instvars][5] = -1; p[0].angle = 225*angle; p[0][instvars][6] = 1; p[0][instvars][7] = 225;
                                create(getSolid, 1680, 408, null, 130)
                            }
                        }else if (runtime.running_layout.name === "Level 43"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                create(getSolid, -387, 678, null, 160);
                                createM(-387, 678, 10, 10, 0, null, [{"cmd":"R","param":90,"speed":1000000},{"cmd":"M","param":810,"speed":100000}]); createM(-387, 1144, 10, 10, 0, null, [{"cmd":"R","param":90,"speed":1000000},{"cmd":"M","param":883,"speed":100000}])
                                if (!b[0]){create(getButton, 502, 578, 140, null, null, 0)}
                                s[5].x = 712; s[5].height = 720;
                                p[0].x = 115; p[0].y = 1016; p[0][instvars][5] = -1; p[0][instvars][6] = 1; p[0][instvars][7] = 90;
                                p[3][instvars][5] = 3;
                                p[4][instvars][5] = 11; p[4].effect_params[0][3] = 255; p[4].effect_params[0][4] = 215; p[4].effect_params[0][5] = 0;
                                p[5][instvars][5] = 5; p[5].effect_params[0][3] = 29; p[5].effect_params[0][4] = 140; p[5].effect_params[0][5] = 231;
                                p[6][instvars][5] = -1;
                                p[7][instvars][5] = 7;
                                p[8][instvars][5] = 1; p[8].x = -387;
                                p[9][instvars][5] = 5;
                                p[10][instvars][5] = -1;
                                setTimeout(function() {mo.Portal4.color = [1,0.8431372549019608,0,1];
                                mo.Portal5.color = [0.11372549019607843,0.5490196078431373,0.9058823529411765,1];},100)
                            }
                        }else if (runtime.running_layout.name === "Level 44"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                p[8].y = 300; p[8][instvars][5] = 8;
                                p[7][instvars][5] = 7;
                                p[3].y = 960; p[3][instvars][5] = -1;
                                p[2][instvars][5] = 3;
                                p[1][instvars][5] = 1;
                                p[0][instvars][5] = -1;
                            }
                        }else if (runtime.running_layout.name === "Level 45"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                p[0].x = 650; p[0].angle = 225*angle; p[0][instvars][5] = -1; p[0][instvars][6] = 1; p[0][instvars][7] = 225;
                                p[1][instvars][5] = 1;
                                p[2].x = 1032;
                                p[3].x = 816;
                                p[4].x = 1900; p[4].y = 1600; p[4].angle = -45*angle;
                                p[5].angle = 225*angle; p[5][instvars][6] = 1; p[5][instvars][7] = 225;
                                sg[0][instvars][8] = 450; sg[0][instvars][0] = 1.2; sg[0].x = 2424; sg[0].y = 1584;
                                getFlag.y = 440
                            }
                        }else if (runtime.running_layout.name === "Level 46"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                getFlag.x = 365; getFlag.y = 1405
                                create(getHash, 807, 1240, 160)
                                destroy(m[0]); destroy(h[1]);
                                p[20][instvars][5] = 22;
                                p[9][instvars][5] = 20;
                                p[21][instvars][5] = 18;
                                p[6][instvars][5] = 16;
                                p[10][instvars][5] = 14;
                                p[18][instvars][5] = 12;
                                p[14][instvars][5] = 10;
                                p[5][instvars][5] = 8;
                                p[12][instvars][5] = 7;
                                sp[27].y = 984; sp[27].angle = 0;
                                sp[28].y = 984; sp[28].angle = 0;
                                m[1].y = 1384; m[1].width = 1; m[1].height = 1; m[1][instvars][6] = 0; m[1].behavior_insts[1].CmdQueue.queue[0].param = 6.5;
                                b[0].x = 1280; b[0].y = 730;  b[0].width = 50
                            }
                        }else if (runtime.running_layout.name === "Level 47"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                var spring0 = create(getSpring, 100, 100, 32, 32, 0, 1, 0.8); create(getSolid, 2552, 1152, null, 128); create(getSolid, 2552, 1152, null, 120, 180); create(getSolid, 2680, 1152, null, 120, 180); if(!getButton.instances[0]){create(getButton, 2616, 1080, 80, null, null, 0)}
                                createM(2612, 1152, 10, 128, null, 0, [{"cmd":"M","param":1000000,"speed":1000000000000}]);
                                spring0[instvars][8] = 2616; spring0[instvars][9] = 1216;
                                setTimeout(function() {spring0[instvars][8] = 2408; spring0[instvars][9] = 1296},10)
                                c[0].x = 2616; c[0].y = 1080;
                                p[11].x = 2616; p[11].y = 1040;
                                p[10].x = 2200; p[10].angle = -90*angle; p[10][instvars][5] = 10;
                                p[9][instvars][5] = 6;
                                p[5][instvars][5] = 5; p[5][instvars][8] = 1; p[5][instvars][9] = 1000
                                p[4][instvars][5] = -1; p[4][instvars][8] = 1; p[4][instvars][9] = 1200;
                                p[5][instvars][8] = 1; p[5][instvars][9] = 1000;
                                p[1][instvars][5] = 1;
                                p[0][instvars][5] = -1;
                            }
                        }else if (runtime.running_layout.name === "Level 48"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                p[9][instvars][5] = 13;
                                p[8][instvars][5] = -1;
                                p[7][instvars][5] = 11;
                                p[6][instvars][5] = -1;
                                p[5][instvars][5] = -1;
                                p[4][instvars][5] = 9;
                                p[3][instvars][5] = 7;
                                p[2].x = 892; p[2].y = 1135; p[2].angle = 90*angle; p[2][instvars][5] = -1;
                                p[0][instvars][5] = 5;
                                p[1][instvars][5] = -1;
                            }
                        }else if (runtime.running_layout.name === "Level 49"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                create(getSolid, 1976, 960, null, 150)
                                destroy(sp[25]); destroy(sp[26]); destroy(sp[27]); destroy(sp.find(x=>x.x===2192&&x.y===632));
                                s[14].y = 1420;
                                p[18][instvars][5] = 13;
                                p[17][instvars][5] = 17;
                                p[16][instvars][5] = 0;
                                p[15][instvars][5] = 15;
                                p[14][instvars][5] = 0;
                                p[13][instvars][5] = 13;
                                p[12][instvars][5] = 19;
                                p[11][instvars][5] = 11; p[11].y = 1756;
                                p[9][instvars][5] = 9;
                                p[8][instvars][5] = 0;
                                p[7][instvars][5] = 7;
                                p[6][instvars][5] = 0;
                                p[5][instvars][5] = 5;
                                p[4][instvars][5] = 0;
                                p[3][instvars][5] = 3; p[3].x = 2239; p[3].y = 1050;
                                p[2][instvars][5] = 0;
                                p[1][instvars][5] = 1;
                                p[0][instvars][5] = 0;
                            }
                        }else if (runtime.running_layout.name === "Level 50"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                var text0 = create(getText, 2140, 1950, null, null, null, 0);
                                text0.text = "Careful!";
                                if(version!=="QA_V4" && version!=="QA_V3"){
                                    create(getInfo, 2140, 1935);
                                    setTimeout(function() {mo.Info0.pos[0] = 2140; mo.Info0.pos[1] = 1935;},100)
                                }
                                b[0].y = 815;
                                m[0].y = 930; m[0].angle = -90*angle;
                                p[31].x = 3160; p[31].y = 1035; p[31].angle = 180*angle; p[31][instvars][5] = 29;
                                p[30][instvars][5] = 26;
                                p[18][instvars][5] = 23;
                                p[23][instvars][5] = 20;
                                p[16][instvars][5] = 17;
                                p[21][instvars][5] = 14;
                                p[20][instvars][5] = 13;
                                p[12][instvars][5] = -1;
                                p[11][instvars][5] = 11;
                                p[10][instvars][5] = -1;
                                p[9][instvars][5] = 9;
                                p[8][instvars][5] = -1;
                                p[7][instvars][5] = 7;
                                p[6][instvars][5] = -1;
                                p[5][instvars][5] = 5;
                                p[4][instvars][5] = -1;
                                p[3][instvars][5] = 3;
                                p[2][instvars][5] = -1;
                                p[1].x = 565;
                            }
                        }else if (runtime.running_layout.name === "Level 51"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                destroy(s[47]); destroy(s.find(x=>x.x===720 && x.y===4232));
                                create(getSolid, 720, 3840, 8, 192, 0); create(getUSolid, 720, 4232, 8, 768, -90); createM(-380, 4136, 1, 1, null, 2, [{"cmd":"W","param":2.1,"speed":null},{"cmd":"R","param":90,"speed":null},{"cmd":"M","param":908,"speed":10000}])
                                if (!b[1]){create(getButton, -380, 4136, 208, 408, 90, 0, 1)}else{destroy(b[1]); c2_callFunction("Menu > Replay")}
                                m[0].behavior_insts[1].isRun = false; m[0].y = 4136; m[0].behavior_insts[1].CmdQueue.queue[0].param = 0; m[0].behavior_insts[1].CmdQueue.queue[1].param = -3752;
                                b[0].width = 330;
                                m[1].y = 3968; m[1].behavior_insts[1].CmdQueue.queue[0].param = -200;
                            }
                        }else if (runtime.running_layout.name === "Level 52"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                destroy(sp[110]); destroy(sp[111])
                                var spring0 = create(getSpring, 100, 100, 100, 32, 0, 1, 2)
                                spring0[instvars][8] = 5264; spring0[instvars][9] = 1608;
                                setTimeout(function() {spring0[instvars][8] = 2636; spring0[instvars][9] = 2160},10)
                                p[4][instvars][5] = 5;
                                p[3][instvars][5] = -1;
                                p[5][instvars][5] = 3;
                                p[2][instvars][5] = -1;
                                p[0][instvars][5] = 1;
                                p[1][instvars][5] = -1;
                            }
                        }else if (runtime.running_layout.name === "Level 53"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                destroy(h[18])
                                create(getSolid, 1552, 1508, 8, 100, -90)
                                s[42].height = 240;
                                p[1][instvars][5] = 1;
                                p[0][instvars][5] = -1;
                                m[17].x = 1576; m[17].y = 1500; m[17][instvars][6] = 1; m[17].behavior_insts[1].CmdQueue.queue[0].param = 2000;
                                b[3].y = 1500; b[3].width = 100; b[3].visible = false;
                                b[4].x = 1374; b[4].y = 2392;
                                b[2].x = 468;
                                m[9].x = 176; m[9][instvars][5] = 1;
                                m[10].y = 2432; m[10][instvars][5] = 2; m[10].behavior_insts[1].CmdQueue.queue[0].param = 2;
                                m[2].y = 2664; m[2][instvars][5] = 3; m[2].behavior_insts[1].CmdQueue.queue[0].param = 0.5;
                            }
                        }else if (runtime.running_layout.name === "Level 54"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                create(getSolid, 704, 5792, 72, 8, 0);
                                destroy(h[4])
                                us[30].y = 3100;
                                b[2].x = 56; b[2].y = 3232; b[2].height = 100;
                                b[1].y = 5064;
                                b[0].y = 5528; b[0].width = 64;
                                p[10][instvars][5] = 10;
                                p[9][instvars][5] = -1;
                                p[8][instvars][5] = 8; p[8].y = 3044;
                                p[7][instvars][5] = -1; p[7].x = 1160;
                                p[6][instvars][5] = 6;
                                p[5][instvars][5] = -1;
                                p[4][instvars][5] = 2;
                                p[2][instvars][5] = 1;
                                p[1][instvars][5] = -1;
                                solid0.angle = 0; solid0.width = 72; solid0.height = 8
                            }
                        }else if (runtime.running_layout.name === "Level 55"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                var spring0 = create(getSpring, 100, 100, 100, 32, 0, 1, 0.7); create(getSolid, 297, 1256, 18, 119, 180); create(getSolid, 24, 584, 1256, 728, 90), createM(297, 1200, null, null, null, 1, [{"cmd":"M","param":2389432,"speed":23948023}]);
                                spring0[instvars][8] = 3424; spring0[instvars][9] = 1192;
                                getFlag.width = 50; getFlag.height = 115; getFlag.y = 1200;
                                m[0].behavior_insts[1].CmdQueue.queue = [{"cmd":"W","param":2,"speed":null},{"cmd":"M","param":150,"speed":null},{"cmd":"W","param":0.25,"speed":null},{"cmd":"M","param":-150,"speed":null},{"cmd":"W","param":1,"speed":null}]
                                m[1].behavior_insts[1].CmdQueue.queue = [{"cmd":"W","param":1.5,"speed":null},{"cmd":"M","param":150,"speed":null},{"cmd":"W","param":0.75,"speed":null},{"cmd":"M","param":-150,"speed":null},{"cmd":"W","param":1,"speed":null}]
                                m[3].behavior_insts[1].CmdQueue.queue = [{"cmd":"W","param":0.5,"speed":null},{"cmd":"M","param":150,"speed":null},{"cmd":"W","param":1.75,"speed":null},{"cmd":"M","param":-150,"speed":null},{"cmd":"W","param":1,"speed":null}]
                                m[4].behavior_insts[1].CmdQueue.queue = [{"cmd":"M","param":150,"speed":null},{"cmd":"W","param":2.25,"speed":null},{"cmd":"M","param":-150,"speed":null},{"cmd":"W","param":1,"speed":null}]
                                m[5][instvars][5] = 2; m[5][instvars][6] = 0; m[5].x = 3512; m[5].y = 1224; m[5].angle = 180*angle;
                                m[6][instvars][6] = 0; m[6].x = 1456; m[6].angle = 0;
                                m[7][instvars][5] = 2; m[7][instvars][6] = 0; m[7].x = 3512; m[7].angle = 180*angle;
                                b[0].x = 1260; b[0].y = 1263;
                                b[1].x = 3248; b[1].y = 750; b[1].height = 200;
                            }
                        }else if (runtime.running_layout.name === "Level 56"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                p[0].x = 912; p[0].y = 1192;
                                p[1].x = 2454; p[1].y = 2092;
                            }
                        }else if (runtime.running_layout.name === "Level 57"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                getPlayer.x = 2640; getPlayer.y = 864;
                                destroy(m[2])
                                getFlag.x = 464; getFlag.y = 1432;
                            }
                        }else if (runtime.running_layout.name === "Level 58"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                s[6].x = 3720;
                                s[47].height = 296;
                                s[48].height = 208;
                                s[52].height = 256
                                b[0].x = 3568; b[0][instvars][0] = 9;
                                b[2][instvars][0] = 1;
                                b[3][instvars][0] = 3;
                                b[4][instvars][0] = 4;
                                b[6][instvars][0] = 8;
                                b[7][instvars][0] = 7;
                            }
                        }else if (runtime.running_layout.name === "Level 59"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                create(getSolid, 1232, 320, null, 32); createM(1248, 320, 1, 1, null, null, [{"cmd":"M","param":29810312,"speed":2980342}])
                                if (!b[0]){create(getButton, 1248, 352, null, null, null, 0)}
                                sp.filter(x=>x.y===408).filter(x=>x.x>684 && x.x<806).forEach(x=>destroy(x))
                                getFlag.y = 1080;
                                p[7][instvars][5] = 7;
                                p[6][instvars][5] = -1; p[6][instvars][6] = 1; p[6][instvars][7] = 1000; p[6][instvars][8] = 1000; p[6][instvars][9] = 1000;
                                p[5][instvars][5] = -1; p[5][instvars][6] = 1; p[5][instvars][7] = 1000; p[5][instvars][8] = 1000; p[5][instvars][9] = 1000;
                                p[4][instvars][5] = 5;
                                p[3][instvars][5] = 3;
                                p[2][instvars][5] = -1;
                                p[1][instvars][5] = 1;
                                p[0][instvars][5] = -1;
                                s[52].x = 1368; s[52].angle = -75*angle;
                            }
                        }else if (runtime.running_layout.name === "Level 60"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                getFlag.width = 48; getFlag.height = 99; getFlag.y = 624;
                                create(getSolid, -4000, 664, 6768, 646, 0); createM(-4000, 664, null, null, null, 4, [{"cmd":"R","param":90,"speed":90000},{"cmd":"M","param":4000,"speed":250}], 20); create(getButton, 4472, 568, null, null, null, 0, 4);
                                m[1].x = 4832; m[1].angle = 180*angle;
                                m[7].x = 284903209;
                                b[2].x = 1864;
                                b[1].x = 1488;
                                b[0].x = 1096;
                                b[3].x = 4472; b[3].y = 568;
                                i = 0; m.forEach(x=>{if (i === 0 || i === 1 || i === 2 || i === 6){x.behavior_insts[1].currentCmd = null; x.behavior_insts[1].CmdQueue.queue[0].param = x.behavior_insts[1].CmdQueue.queue[0].param * -1; setTimeout(function() {x.behavior_insts[1].isRun = true},20)}; i++})
                                i2 = 0; b.forEach(x=>{if (i2 > 3){destroy(x)}; i2++})
                            }
                        }else if (runtime.running_layout.name === "Level 61"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                if (b[1]){destroy(b[1])}
                                b[0].y = 2344;
                                m.filter(x=>x[instvars][5] === 1).forEach(x=>x.behavior_insts[1].isRun = true)
                                g[2].angle = 90*angle; g[2].y = 2128; g[2].x = 3552;
                            }
                        }else if (runtime.running_layout.name === "Level 62"){
                            if(version==="1.0.2"){
                                g[6].x = 3790; g[6].y = 2828; g[6].angle = 180*angle;
                            }else if(version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                g[6].x = 3790; g[6].y = 2618; g[6].angle = 180*angle;
                            }
                        }else if (runtime.running_layout.name === "Level 63"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                create(getSolid, 2370, 520, 32, 32, 90); create(getSolid, 2586, 520, 32, 32, 90);
                                i = 0; sp.forEach(x=>{if(i === 73 || i === 75 || i === 78){destroy(x)}; i++})
                                getFlag.angle = 0;
                            }
                        }else if (runtime.running_layout.name === "Level 64"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                p[1][instvars][5] = 1; p[1].y = 337;
                                p[0][instvars][5] = -1;
                                getFlag.angle = 0;
                            }
                        }else if (runtime.running_layout.name === "Level 65"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                createM(-1000, 264, null, null, null, 1, [{"cmd":"R","param":90,"speed":999999},{"cmd":"M","param":2328,"speed":999999}]);
                                g[0].angle = 90*angle; g[0].x = 2488; g[0].y = 15.9999847412109;
                                getFlag.x = -1000; getFlag.y = 224; getFlag.angle = 0;
                                m[0].x = -10000;
                                sp.filter(x=>x.y < 216 && x.x < 2134).forEach(x=>{x.angle = 90*angle; x.x = x.x + 40})
                            }
                        }else if (runtime.running_layout.name === "Level 66"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                getFlag.y = 616;
                                g[1].angle = 90*angle; g[1].x = 3336; g[1].y = 1192;
                                p[3][instvars][5] = 7;
                                p[2][instvars][5] = -1;
                            }
                        }else if (runtime.running_layout.name === "Level 67"){
                            if(version==="1.0.2"){
                                getFlag.angle = 0;
                                m[1].x = 2507; m[1].angle = 180*angle; m[1][instvars][6] = 0;
                                destroy(m[2])
                                b[1].x = 2032
                                g[0].height = 900;
                                m[0].x = 434; m[0].y = 2450; m[0].angle = 90*angle; m[0][instvars][6] = 0;
                                b[0].y = 2144;
                                sg[1].x = 2480; sg[1].y = 1040; sg[1].visible = true; sg[1].angle = -90*angle; sg[1].width = 32; sg[1].height = 32; sg[1][instvars][0] = 0.65; sg[1][instvars][6] = 32; sg[1][instvars][8] = 2480; sg[1][instvars][9] = 1040;
                            }else if(version==="1.0.1" || version==="1.0.0"){
                                getFlag.x = 442; getFlag.y = 1036; getFlag.angle = 0;
                                m[1].x = 2507; m[1].angle = 180*angle; m[1][instvars][6] = 0;
                                destroy(m[2])
                                b[1].x = 2032
                                g[0].height = 900;
                                m[0].x = 434; m[0].y = 2450; m[0].angle = 90*angle; m[0][instvars][6] = 0;
                                b[0].y = 2144;
                                sg[1].x = 2480; sg[1].y = 1040; sg[1].visible = true; sg[1].angle = -90*angle; sg[1].width = 32; sg[1].height = 32; sg[1][instvars][0] = 0.65; sg[1][instvars][6] = 32; sg[1][instvars][8] = 2480; sg[1][instvars][9] = 1040;
                            }else if(version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                getFlag.angle = 0;
                                m[1].x = 2507; m[1].angle = 180*angle; m[1][instvars][6] = 0;
                                b[1].x = 2032
                                g[0].height = 900;
                                m[0].x = 434; m[0].y = 2450; m[0].angle = 90*angle; m[0][instvars][6] = 0;
                                b[0].y = 2144;
                                sg[1].x = 2480; sg[1].y = 1040; sg[1].visible = true; sg[1].angle = -90*angle; sg[1].width = 32; sg[1].height = 32; sg[1][instvars][0] = 0.65; sg[1][instvars][6] = 32; sg[1][instvars][8] = 2480; sg[1][instvars][9] = 1040;
                            }
                        }else if (runtime.running_layout.name === "Level 68"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                p[0][instvars][5] = -1; p[0].x = 2132;
                                p[1][instvars][5] = 1;
                            }
                        }else if (runtime.running_layout.name === "Level 69"){
                            if(version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                sg.filter(x=>x.y===1288).forEach(x=>x.angle=180*angle);
                            }
                        }else if (runtime.running_layout.name === "Level 70"){
                            if(version==="1.0.2"){
                                r[0].angle = 180*angle; r[0].x = 10863;
                                g.filter(x=>x.x > 7745 && x.x < 8825).forEach(x=>{x.angle = -90*angle; x.x = x.x - x.height; x.y = x.y + x.width})
                                setTimeout(function(){if (g[6].y !==808){c2_callFunction("Menu > Replay")}},20)
                                p[3][instvars][5] = 3; p[3].visible = true;
                                p[2][instvars][5] = -1; p[2].visible = false;
                                p[1][instvars][5] = -1;
                                p[0][instvars][5] = 1;
                                getFlag.angle = 315*angle;
                            }else if(version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                r[0].angle = 180*angle; r[0].x = 10863;
                                g.filter(x=>x.x > 7745 && x.x < 8825).forEach(x=>{x.angle = -90*angle; x.x = x.x - x.height; x.y = x.y + x.width})
                                setTimeout(function(){if (g[6].y !==808){c2_callFunction("Menu > Replay")}},20)
                                p[5][instvars][4] = 6; p[5][instvars][5] = -1;
                                p[3][instvars][5] = 3; p[3].visible = true;
                                p[2][instvars][5] = -1; p[2].visible = false;
                                p[1][instvars][5] = -1;
                                p[0][instvars][5] = 1;
                                getFlag.angle = 315*angle;
                            }
                        }else if (runtime.running_layout.name === "Level 71"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                m.find(x=>x.x === 3332).behavior_insts[1].CmdQueue.queue = [{"cmd":"W","param":0.5,"speed":null},{"cmd":"M","param":176,"speed":null}];
                                m.find(x=>x.x === 3436).behavior_insts[1].CmdQueue.queue = [{"cmd":"M","param":192,"speed":null}];
                                b[0].width = 1; b[0].height = 200; b[0].x = 3486; b[0].y = 1587;
                                p[17][instvars][5] = 5; p[17].angle = 0; p[17].y = 1539; p[17].x = 2870;
                                p[16][instvars][5] = -1; p[16].angle = 0; p[16].x = 2900;
                                p[5][instvars][5] = 3;
                                p[4][instvars][5] = -1;
                            }
                        }else if (runtime.running_layout.name === "Level 72"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                getFlag.angle = 0;
                                create(getSolid, 6240, 598, null, 10); create(getHash, 3896, 224, 96, null, -80);
                                g[0].angle = 100*angle; g[0].x = 6528; g[0].y = 480;
                                p[0][instvars][5] = 1;
                                p[1][instvars][5] = -1;
                                s[48].y = 1048;
                            }
                        }else if (runtime.running_layout.name === "Level 73"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                s[23].y = 752;
                                destroy(sp[62])
                                m[3].angle = -90*angle; m[3].y = 1503; m[3][instvars][6] = 0;
                                b[0].x = 1502; b[0].y = 900; b[0].width = 220; b[0].height = 32;
                                m.filter(x=>x !== m[3]).forEach(x=>{x.angle = 0; x.x = 1232; x[instvars][6] = 0;})
                                g[2][instvars][7] = 1500;
                                g[1][instvars][7] = 1500;
                                getFlag.y = 1296;
                            }
                        }else if (runtime.running_layout.name === "Level 74"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                if(version==="QA_V4" || version==="QA_V3"){getFlag.x = 469; getFlag.y = 3406;}
                                getPlayer.x = 11698;
                                b[3].x = 10600; b[3][instvars][0] = 10;
                                b[7][instvars][0] = 8;
                                b[6][instvars][0] = 6;
                                b[5][instvars][0] = 5;
                                p[7][instvars][5] = 6;
                                p[4][instvars][5] = 5; p[4][instvars][8] = 1; p[4][instvars][9] = 1000;
                                p[1][instvars][5] = 1;
                                p[0][instvars][5] = -1; p[0].x = 6672; p[0].y = 1800; p[0].angle = 180*angle;
                                m[3].angle = 180*angle; m[3].x = 6712; m[3].y = 1700;
                                b[2].x = 6608; b[2].height = 300; b[2].visible = false;
                                m[11][instvars][5] = 2;
                                b[1].y = 1896;
                                m[0].x = 4616; m[0].behavior_insts[1].CmdQueue.queue[0].param = -868; m[0].behavior_insts[1].CmdQueue.repeatCountSave = 1;
                                b[0].x = 4656;
                                sg[4].x = 3328; sg[4].y = 3304; sg[4][instvars][0] = 0.7; sg[4][instvars][8] = 3328; sg[4][instvars][9] = 3304;
                            }
                        }else if (runtime.running_layout.name === "Level 75"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                create(getSpike, 1992, 680, 1000, 100, null, 0);
                                destroy(sg[0])
                                c.x = 1432;
                                p[8].angle = 180*angle; p[8].x = 2912; p[8].y = 3952; p[8][instvars][5] = 12; p[8].visible = true;
                                p[7].height = 100; p[7].x = 1756; p[7][instvars][5] = -1; p[7][instvars][8] = 1; p[7][instvars][9] = 1300; p[7][instvars][10] = 1;
                                p[6].angle = 0; p[6].height = 432; p[6].x = 1344; p[6].y = 224; p[6][instvars][5] = 10;
                                p[5][instvars][5] = 10;
                                p[3][instvars][5] = 3;
                                p[2][instvars][5] = -1;
                                p[1].x = 1504; p[1].y = 2424; p[1][instvars][5] = 1;
                                p[0][instvars][5] = -1;
                            }
                        }else if (runtime.running_layout.name === "Level 76"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                if (!b[1]){create(getButton, 6240, 3688, null, null, null, 1, 1)}
                                i = 0; m.forEach(x=>{if (i === 0 || i === 5 || i === 6){x.behavior_insts[1].isRun = false; x.behavior_insts[1].currentCmd = null; x.behavior_insts[1].CmdQueue.queue[0].param = x.behavior_insts[1].CmdQueue.queue[0].param * -1}; i++})
                                m[0].x = 6064;
                                m[5].x = 6304;
                                m[6].x = 6184; m[6].behavior_insts[1].CmdQueue.queue[0].param = -1677;
                            }
                        }else if (runtime.running_layout.name === "Level 77"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                create(getSolid, 3096, 2760, null, 64); create(getUSolid, 536, 1352, 8, 168, 180);
                                destroy(m[2]);
                                c.x = 976; c.y = 2612;
                                p[3].angle = 0; p[3].x = 552; p[3][instvars][5] = 3;
                                p[2].angle = 45 * angle; p[2].x = 2712; p[2][instvars][5] = -1;
                                p[1][instvars][5] = 1;
                                p[0][instvars][5] = -1;
                                b[0].x = 432; b[0].y = 1112;
                                m[1].y = 1120;
                                i = 0; sp.forEach(x=>{if(i === 4 || i === 5){destroy(x)}; i++})
                            }
                        }else if (runtime.running_layout.name === "Level 78"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                b[0].x = 2024; b[0].height = 300;
                                p[7].y = 1704; p[7].height = 64; p[7][instvars][5] = 7;
                                p[6][instvars][5] = -1;
                                p[5][instvars][5] = 5;
                                p[4][instvars][5] = -1;
                                p[3][instvars][5] = 3;
                                p[2][instvars][5] = -1;
                                p[1][instvars][5] = 1;
                                p[0][instvars][5] = -1;
                            }
                        }else if (runtime.running_layout.name === "Level 79"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                destroy(r[12]); destroy(r[13])
                                create(getSpike, 464, 3312, null, null, -90);
                                getFlag.angle = 0; getFlag.x = 272;
                                sp[0].x = 2779; sp[0].y = 2309; sp[0].angle = -40*angle;
                                s[3].x = 2757; s[3].y = 2307; s[3].angle = 50*angle;
                                p[3][instvars][5] = 3; p[3].visible = true;
                                p[2][instvars][5] = -1; p[2].x = 392; p[2].y = 3344; p[2].angle = 0; p[2].visible = false;
                                sp[121].angle = -90*angle; sp[121].width = 32; sp[121].x = 464; sp[121].y = 3344; sp[121].visible = true;
                                s[56].height = -128;
                                p[1].x = 600; p[1][instvars][5] = 1;
                                p[0][instvars][5] = -1;
                                sp[124].x = 2160; sp[124].y = 704; sp[124].angle = 180*angle;
                                sp[125].x = 2224; sp[125].y = 704; sp[125].angle = 180*angle;
                                s[46].x = 2240; s[46].height = -96;
                            }
                        }else if (runtime.running_layout.name === "Level 80"){
                            if(version==="1.0.2" || version==="1.0.1" || version==="1.0.0" || version==="QA_V7" || version==="QA_V4" || version==="QA_V3"){
                                create(getSolid, 2320, 2328, null, 32);
                                destroy(sp[361]); destroy(sp[419]);
                                getPlayer.x = 3232; getPlayer.y = 1736;
                                p[6].height = 100; p[6].x = 3200; p[6].y = 1776;
                                p[3][instvars][5] = 3; p[3].visible = true;
                                p[2][instvars][5] = -1; p[2].y = 3920;
                                m[0].y = 3968; m[0][instvars][6] = 0; m[0].behavior_insts[1].CmdQueue.queue[0].param = -2000; m[0].behavior_insts[1].CmdMove.move.max = 200;
                                b[0].y = 3936;
                                p[1][instvars][5] = 1; p[1].height = 360;
                                p[0][instvars][5] = -1;
                            }
                        }
                    },0.1)
                }
            }
        }
    }
    runtime.tickMe(reverse)
})();
    // Yo you're actually down here. Just wanna say thanks for playing this mod, it took me a while to make.
    // I wanna thank Drakeerv and Awesomeguy for all their modding, I never would've gotten into modding (even outside of OvO) if it weren't for them.
    // I also wanna thank Drakeerv (again) for his lousy abandoned attempt at an OvO Reverse mod,
    // I never would've had the motivation to make this mod if it weren't for that.
    // And thanks to the whole OvO Community, I never would've stayed with OvO all these years if it weren't for everyone.
    // Thank (most of) you for still accepting me, even if I'm super annoying.