const db = require("./db");

function create(data) {
  var ref = db().ref("RoleDefine");
  ref.set(data)
  .then(() => {
    console.log('ok');
  })
  .catch((error) => {
    console.log(error);
  })
}

var data = {};

data.COMMUNITY_ADMIN = {}
data.COMMUNITY_ADMIN.inherit = {USER:true}
data.COMMUNITY_ADMIN.displayName = "社區管理員"

data.GUARD = {}
data.GUARD.inherit = {USER:true}
data.GUARD.displayName = "物業保全"

data.RESIDENT = {}
data.RESIDENT.inherit = {USER:true}
data.RESIDENT.displayName = "住戶成員"

data.RESIDENT_ADMIN = {}
data.RESIDENT_ADMIN.inherit = {USRE:true}
data.RESIDENT_ADMIN.displayName = "住戶管理員"

data.USER = {}
data.USER.displayName = "一般使用者"

data.SYSTEM_ADMIN = {}
data.inherit = {COMMUNITY_ADMIN:true, GUARD:true, RESIDENT_ADMIN:true, RESIDENT:true, USER:true}
data.SYSTEM_ADMIN.displayName = "系統管理員"

create(data);
