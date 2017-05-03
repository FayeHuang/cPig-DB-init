const db = require("./db");

function create(data) {
  var ref = db().ref("PermissionDefine");
  ref.set(data)
  .then(() => {
    console.log('ok');
  })
  .catch((error) => {
    console.log(error);
  })
}

var data = {};
data.Announcements = {}
data.Announcements.read = {default:true, isReadOnly:false, displayName:"讀公告"}
data.Announcements.update = {default:false, isReadOnly:false, displayName:"修改公告"}
data.Announcements.delete = {default:false, isReadOnly:false, displayName:"刪除公告"}
data.Announcements.create = {default:false, isReadOnly:false, displayName:"發佈新公告"}

data.Communities = {}
data.Communities.read = {default:true, isReadOnly:false, displayName:"讀社區資訊"}
data.Communities.update = {default:false, isReadOnly:false, displayName:"更新社區資訊"}
data.Communities.delete = {default:false, isReadOnly:false, displayName:"刪除社區"}
data.Communities.create = {default:false, isReadOnly:false, displayName:"新增社區"}

data.CommunityRequisitions = {}
data.CommunityRequisitions.read = {default:false, isReadOnly:false, displayName:"讀新社區申請資料"}
data.CommunityRequisitions.update = {default:false, isReadOnly:false, displayName:"修改新社區申請資料"}
data.CommunityRequisitions.delete = {default:false, isReadOnly:false, displayName:"刪除新社區申請"}
data.CommunityRequisitions.create = {default:false, isReadOnly:false, displayName:"申請新社區"}
data.CommunityRequisitions.verify = {default:false, isReadOnly:false, displayName:"審核新社區申請"}

data.Members = {}
data.Members.COMMUNITY_ADMIN = {}
data.Members.COMMUNITY_ADMIN.read = {default:false, isReadOnly:false, displayName:"讀社區管理員資料"}
data.Members.COMMUNITY_ADMIN.update = {default:false, isReadOnly:false, displayName:"更新社區管理員資料"}
data.Members.COMMUNITY_ADMIN.delete = {default:false, isReadOnly:false, displayName:"刪除社區管理員"}
data.Members.COMMUNITY_ADMIN.create = {default:false, isReadOnly:false, displayName:"新增社區管理員"}
data.Members.GUARD = {}
data.Members.GUARD.read = {default:false, isReadOnly:false, displayName:"讀物業保全資料"}
data.Members.GUARD.update = {default:false, isReadOnly:false, displayName:"更新物業保全資料"}
data.Members.GUARD.delete = {default:false, isReadOnly:false, displayName:"刪除物業保全"}
data.Members.GUARD.create = {default:false, isReadOnly:false, displayName:"新增物業保全"}
data.Members.RESIDENT = {}
data.Members.RESIDENT.read = {default:false, isReadOnly:false, displayName:"讀住戶成員資料"}
data.Members.RESIDENT.update = {default:false, isReadOnly:false, displayName:"更新住戶成員資料"}
data.Members.RESIDENT.delete = {default:false, isReadOnly:false, displayName:"刪除住戶成員"}
data.Members.RESIDENT.create = {default:false, isReadOnly:false, displayName:"新增住戶成員"}
data.Members.RESIDENT_ADMIN = {}
data.Members.RESIDENT.read = {default:false, isReadOnly:false, displayName:"讀住戶管理員"}
data.Members.RESIDENT.update = {default:false, isReadOnly:false, displayName:"更新住戶管理員"}
data.Members.RESIDENT.delete = {default:false, isReadOnly:false, displayName:"刪除住戶管理員"}
data.Members.RESIDENT.create = {default:false, isReadOnly:false, displayName:"新增住戶管理員"}


data.InviteMembers = {}
data.InviteMembers.COMMUNITY_ADMIN = {}
data.InviteMembers.COMMUNITY_ADMIN.read = {default:false, isReadOnly:false, displayName:"讀社區管理員邀請資料"}
data.InviteMembers.COMMUNITY_ADMIN.update = {default:false, isReadOnly:false, displayName:"更新社區管理員邀請資料"}
data.InviteMembers.COMMUNITY_ADMIN.delete = {default:false, isReadOnly:false, displayName:"取消社區管理員邀請"}
data.InviteMembers.COMMUNITY_ADMIN.create = {default:false, isReadOnly:false, displayName:"邀請加入社區管理員"}
data.InviteMembers.COMMUNITY_ADMIN.accept = {default:false, isReadOnly:false, displayName:"接受邀請加入社區管理員"}

data.InviteMembers.GUARD = {}
data.InviteMembers.GUARD.read = {default:false, isReadOnly:false, displayName:"讀物業保全邀請資料"}
data.InviteMembers.GUARD.update = {default:false, isReadOnly:false, displayName:"更新物業保全邀請資料"}
data.InviteMembers.GUARD.delete = {default:false, isReadOnly:false, displayName:"取消物業保全邀請"}
data.InviteMembers.GUARD.create = {default:false, isReadOnly:false, displayName:"邀請加入物業保全"}
data.InviteMembers.GUARD.accept = {default:false, isReadOnly:false, displayName:"接受邀請加入物業保全"}

data.InviteMembers.RESIDENT_ADMIN = {}
data.InviteMembers.RESIDENT_ADMIN.read = {default:false, isReadOnly:false, displayName:"讀住戶管理員邀請資料"}
data.InviteMembers.RESIDENT_ADMIN.update = {default:false, isReadOnly:false, displayName:"更新住戶管理員邀請資料"}
data.InviteMembers.RESIDENT_ADMIN.delete = {default:false, isReadOnly:false, displayName:"取消住戶管理員邀請"}
data.InviteMembers.RESIDENT_ADMIN.create = {default:false, isReadOnly:false, displayName:"邀請加入住戶管理員"}
data.InviteMembers.RESIDENT_ADMIN.accept = {default:false, isReadOnly:false, displayName:"接受邀請加入住戶管理員"}

data.InviteMembers.RESIDENT = {}
data.InviteMembers.RESIDENT.read = {default:false, isReadOnly:false, displayName:"讀住戶成員邀請資料"}
data.InviteMembers.RESIDENT.update = {default:false, isReadOnly:false, displayName:"更新住戶成員邀請資料"}
data.InviteMembers.RESIDENT.delete = {default:false, isReadOnly:false, displayName:"取消住戶成員邀請"}
data.InviteMembers.RESIDENT.create = {default:false, isReadOnly:false, displayName:"邀請加入住戶成員"}
data.InviteMembers.RESIDENT.accept = {default:false, isReadOnly:false, displayName:"接受邀請加入住戶成員"}

data.MemberInviteCodes = {}
data.MemberInviteCodes.COMMUNITY_ADMIN = {}
data.MemberInviteCodes.COMMUNITY_ADMIN.read = {default:false, isReadOnly:false, displayName:"讀社區管理員邀請碼"}
data.MemberInviteCodes.COMMUNITY_ADMIN.update = {default:false, isReadOnly:false, displayName:"更新社區管理員邀請碼"}
data.MemberInviteCodes.COMMUNITY_ADMIN.delete = {default:false, isReadOnly:false, displayName:"刪除社區管理員邀請碼"}
data.MemberInviteCodes.COMMUNITY_ADMIN.create = {default:false, isReadOnly:false, displayName:"新增社區管理員邀請碼"}
data.MemberInviteCodes.COMMUNITY_ADMIN.verify = {default:false, isReadOnly:false, displayName:"驗證社區管理員邀請碼"}

data.MemberInviteCodes.GUARD = {}
data.MemberInviteCodes.GUARD.read = {default:false, isReadOnly:false, displayName:"讀物業保全邀請碼"}
data.MemberInviteCodes.GUARD.update = {default:false, isReadOnly:false, displayName:"更新物業保全邀請碼"}
data.MemberInviteCodes.GUARD.delete = {default:false, isReadOnly:false, displayName:"刪除物業保全邀請碼"}
data.MemberInviteCodes.GUARD.create = {default:false, isReadOnly:false, displayName:"新增物業保全邀請碼"}
data.MemberInviteCodes.GUARD.verify = {default:false, isReadOnly:false, displayName:"驗證物業保全邀請碼"}

data.MemberInviteCodes.RESIDENT = {}
data.MemberInviteCodes.RESIDENT.read = {default:false, isReadOnly:false, displayName:"讀住戶管理員邀請碼"}
data.MemberInviteCodes.RESIDENT.update = {default:false, isReadOnly:false, displayName:"更新住戶管理員邀請碼"}
data.MemberInviteCodes.RESIDENT.delete = {default:false, isReadOnly:false, displayName:"刪除住戶管理員邀請碼"}
data.MemberInviteCodes.RESIDENT.create = {default:false, isReadOnly:false, displayName:"新增住戶管理員邀請碼"}
data.MemberInviteCodes.RESIDENT.verify = {default:false, isReadOnly:false, displayName:"驗證住戶管理員邀請碼"}

data.MemberInviteCodes.RESIDENT_ADMIN = {}
data.MemberInviteCodes.RESIDENT_ADMIN.read = {default:false, isReadOnly:false, displayName:"讀住戶成員邀請碼"}
data.MemberInviteCodes.RESIDENT_ADMIN.update = {default:false, isReadOnly:false, displayName:"更新住戶成員邀請碼"}
data.MemberInviteCodes.RESIDENT_ADMIN.delete = {default:false, isReadOnly:false, displayName:"刪除住戶成員邀請碼"}
data.MemberInviteCodes.RESIDENT_ADMIN.create = {default:false, isReadOnly:false, displayName:"新增住戶成員邀請碼"}
data.MemberInviteCodes.RESIDENT_ADMIN.verify = {default:false, isReadOnly:false, displayName:"驗證住戶成員邀請碼"}

// data.CommunityMemberInviteCodes.COMMUNITY_ADMIN.scan = {default:false, isReadOnly:false, displayName:"掃描社區管理員邀請碼"}

data.Households = {}
data.Households.read = {default:true, isReadOnly:false, displayName:"讀社區住戶資訊"}
data.Households.update = {default:false, isReadOnly:false, displayName:"更新社區住戶資訊"}
data.Households.delete = {default:false, isReadOnly:false, displayName:"刪除社區住戶"}
data.Households.create = {default:false, isReadOnly:false, displayName:"新增社區住戶"}

data.HouseholdRequisitions = {}
data.HouseholdRequisitions.read = {default:false, isReadOnly:false, displayName:"讀新住戶申請資料"}
data.HouseholdRequisitions.update = {default:false, isReadOnly:false, displayName:"修改新住戶申請資料"}
data.HouseholdRequisitions.delete = {default:false, isReadOnly:false, displayName:"刪除新住戶申請"}
data.HouseholdRequisitions.create = {default:false, isReadOnly:false, displayName:"申請新住戶"}
data.HouseholdRequisitions.verify = {default:false, isReadOnly:false, displayName:"審核新住戶申請"}

data.CommunityPermissions = {}
data.CommunityPermissions.COMMUNITY_ADMIN = {}
data.CommunityPermissions.COMMUNITY_ADMIN.read = {default:false, isReadOnly:false, displayName:"讀社區管理員權限"}
data.CommunityPermissions.COMMUNITY_ADMIN.update = {default:false, isReadOnly:false, displayName:"設定社區管理員權限"}

data.CommunityPermissions.GUARD = {}
data.CommunityPermissions.GUARD.read = {default:false, isReadOnly:false, displayName:"讀物業保全權限"}
data.CommunityPermissions.GUARD.update = {default:false, isReadOnly:false, displayName:"設定物業保全權限"}


data.CommunityPermissions.RESIDENT = {}
data.CommunityPermissions.RESIDENT.read = {default:false, isReadOnly:false, displayName:"讀住戶成員權限"}
data.CommunityPermissions.RESIDENT.update = {default:false, isReadOnly:false, displayName:"設定住戶成員權限"}

data.CommunityPermissions.RESIDENT_ADMIN = {}
data.CommunityPermissions.RESIDENT_ADMIN.read = {default:false, isReadOnly:false, displayName:"讀住戶管理員權限"}
data.CommunityPermissions.RESIDENT_ADMIN.update = {default:false, isReadOnly:false, displayName:"設定住戶管理員權限"}

data.HouseholdPermissions = {}
data.HouseholdPermissions.read = {default:false, isReadOnly:false, displayName:"讀住戶權限"}
data.HouseholdPermissions.update = {default:false, isReadOnly:false, displayName:"設定住戶權限"}

data.Packages = {}
data.Packages.read = {default:false, isReadOnly:false, displayName:"讀信件包裹資料"}
data.Packages.update = {default:false, isReadOnly:false, displayName:"修改信件包裹資料"}
data.Packages.delete = {default:false, isReadOnly:false, displayName:"刪除信件包裹"}
data.Packages.create = {default:false, isReadOnly:false, displayName:"新增信件包裹"}

data.PackageReceiveCodes = {}
data.PackageReceiveCodes.read = {default:false, isReadOnly:false, displayName:"讀信件包裹領取序號"}
data.PackageReceiveCodes.update = {default:false, isReadOnly:false, displayName:"更新信件包裹領取序號"}
data.PackageReceiveCodes.delete = {default:false, isReadOnly:false, displayName:"刪除信件包裹領取序號"}
data.PackageReceiveCodes.create = {default:false, isReadOnly:false, displayName:"新增信件包裹領取序號"}
data.PackageReceiveCodes.verify = {default:false, isReadOnly:false, displayName:"驗證信件包裹領取序號"}

data.Users = {}
data.Users.read = {default:false, isReadOnly:false, displayName:"讀使用者資料"}
data.Users.update = {default:false, isReadOnly:false, displayName:"更新使用者資料"}
data.Users.delete = {default:false, isReadOnly:false, displayName:"刪除使用者"}
data.Users.create = {default:false, isReadOnly:false, displayName:"新增使用者"}

data.SystemAdmins = {}
data.SystemAdmins.read = {default:false, isReadOnly:false, displayName:"讀系統管理員資料"}
data.SystemAdmins.update = {default:false, isReadOnly:false, displayName:"更新系統管理員資料"}
data.SystemAdmins.delete = {default:false, isReadOnly:false, displayName:"刪除系統管理員"}
data.SystemAdmins.create = {default:false, isReadOnly:false, displayName:"新增系統管理員"}

data.CommunitySNs = {}
data.CommunitySNs.read = {default:false, isReadOnly:false, displayName:"讀社區序號"}
data.CommunitySNs.update = {default:false, isReadOnly:false, displayName:"更新社區序號"}
data.CommunitySNs.delete = {default:false, isReadOnly:false, displayName:"刪除社區序號"}
data.CommunitySNs.create = {default:false, isReadOnly:false, displayName:"新增社區序號"}

data.Invitations = {}
data.Invitations.read = {default:false, isReadOnly:false, displayName:"讀邀請單"}
data.Invitations.update = {default:false, isReadOnly:false, displayName:"更新邀請單"}
data.Invitations.delete = {default:false, isReadOnly:false, displayName:"刪除邀請單"}
data.Invitations.create = {default:false, isReadOnly:false, displayName:"新增邀請單"}

//console.log(data);

create(data);

