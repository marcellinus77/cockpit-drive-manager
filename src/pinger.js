const address = document.getElementById("address");
const output = document.getElementById("output");
const result = document.getElementById("result");

function spawn_success() {
    result.style.color = "green";
    result.textContent = "success";
}

function spawn_fail() {
    result.style.color = "red";
    result.textContent = "fail";
}

function spawn_output(data) {
    output.append(document.createTextNode(data));
}

function storcli_run(cmd) {
    cockpit.spawn(["/opt/MegaRAID/storcli/storcli64", cmd], { environ: ["LC_ALL=C"], superuser: "require" })
            .stream(spawn_output)
            .then(spawn_success)
            .catch(spawn_fail);

    result.textContent = "";
    output.textContent = "";
}
function lsscsi_run(cmd) {
    cockpit.spawn(["lsscsi", cmd], { environ: ["LC_ALL=C"], superuser: "require" })
            .stream(spawn_output)
            .then(spawn_success)
            .catch(spawn_fail);

    result.textContent = "";
    output.textContent = "";
}
function lsscsi_run(cmd) {
    cockpit.spawn(["lsscsi", cmd], { environ: ["LC_ALL=C"], superuser: "require" })
            .stream(spawn_output)
            .then(spawn_success)
            .catch(spawn_fail);

    result.textContent = "";
    output.textContent = "";
}
function lsscsi_run(cmd) {
    cockpit.spawn(["lsscsi", cmd], { environ: ["LC_ALL=C"], superuser: "require" })
            .stream(spawn_output)
            .then(spawn_success)
            .catch(spawn_fail);

    result.textContent = "";
    output.textContent = "";
}
function sg_ses_run(cmd) {
    cockpit.spawn(["sg_ses", cmd], { environ: ["LC_ALL=C"], superuser: "require" })
            .stream(spawn_output)
            .then(spawn_success)
            .catch(spawn_fail);

    result.textContent = "";
    output.textContent = "";
}

cockpit.transport.wait(function() {
    storcli_run("show");
    storcli_run("/c0 show");
    storcli_run("/c1 /e0 show");
    sg_ses_run("sg8 --join");
    lsscsi_run("-g");
});