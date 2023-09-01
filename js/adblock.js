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
        
        <h2 class="modal-title">WEB SİTE GENEL DUYURU</h2>
      </div>
      <div class="modal-body">
        <p>Web sitemiz, ziyaretçilerimize çevrimiçi reklamlar göstererek mümkün olmaktadır.<br> Lütfen web sitemizde reklam engelleyicinizi devre dışı bırakarak bize destek olmayı düşünün.</p>
        
        <p>Hesaplama sitemiz sorunsuz çalışmaktadır!</p>
        <!--ul>
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
Büyük mavi “Güç” simgesine tıklayın. Sayfayı yenile.
          </li>
        </ul-->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal" >Devam et</button>
      </div>
    </div>
    <!-- /.modal-content -->
  </div>
  <!-- /.modal-dialog -->
</div>
<!-- /.modal -->`