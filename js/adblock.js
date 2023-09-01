function startAdAlertDisplayProcess() {
    //document.cookie = "adBlockAlertShown=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    getCookieValue("adBlockAlertShown").then(
        result => {
            console.log("ad Block Alert Already Shown");
        },
        function (err) {
            console.log("adBlockAlertNotShown");
            $("#adBlockAlertDiv").modal("show");

            $("#adBlockAlertDiv").on("hidden.bs.modal", function (e) {
                //set cookie
                var dat = new Date();
                dat.setDate(dat.getDate() + 1);
                document.cookie =
                    "adBlockAlertShown=true; expires=" + dat.toUTCString() + "; path=/";
                console.log("adalert cookie set");
            });
        }
    );
}

function getCookieValue(key) {
    return new Promise(function (resolve, reject) {
        var itemFound = false;
        document.cookie.split(";").map(item => {
            if (item.indexOf(key) >= 0) {
                itemFound = true;
                resolve(item.split("=")[1]);
            }
        });
        if (itemFound == false) {
            reject(Error("No Data"));
        }
    });
}

window.setTimeout(function () {
    if (window.canRunAds === undefined) {
        var node = document.createElement("div");  
        document.body.appendChild(node);
        node.innerHTML =adBlockHtml;
        startAdAlertDisplayProcess();
    }
}, 1000);

var adBlockHtml=`<div class="modal fade" id="adBlockAlertDiv">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header" style="background-color: #1955a5;color:white;">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <div style="border-bottom: 2px solid #174e98;padding:10px 0;">CoreVertical.com</div>
        <h2 class="modal-title">We noticed you’re blocking ads.</h2>
      </div>
      <div class="modal-body">
        <p> Our website is made possible by displaying online advertisements to our visitors.<br> Please consider supporting us by disabling your ad blocker on our website.</p>
        
        <p>Here are the steps to whitelist this site</p>
        <ul>
          <li>
            <b>AdBlock Plus</b>
Click ”Enabled on this site”  or  ”Disable on corevertical.com.” Refresh the page.
          </li>
          <li>
            <b>AdBlock</b>
Click on "AdBlock" sign on browser. Select "Don't run on pages of this site".
          </li>
          <li>
            <b> Ghostery</b>
Version 6.0: click ”trust site.” Refresh the page. Older versions:  click “whitelist site.”  You will see the message ”site is whitelisted.” Click “reload the page to see your changes.”
          </li>  
          <li>
            <b>uBlock</b>
Click the big blue ”Power” icon. Refresh the page.
          </li>
        </ul>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal" >Continue to site</button>
      </div>
    </div>
    <!-- /.modal-content -->
  </div>
  <!-- /.modal-dialog -->
</div>
<!-- /.modal -->`