if(window.location.href.includes("early")){
(function () {
    let old = globalThis.sdk_runtime;
    c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
    let runtime = globalThis.sdk_runtime;
    globalThis.sdk_runtime = old;

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
            notify("Soon", "Coming soon...");
        },
    }

    inputs.init();
})()}
else{
    ovoModLoader.notify("Not here.", "This is only for the earliest version.")
}