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
data.Announcement = {}
data.Announcement.read = {default:true, isReadOnly:false, displayName:"讀公告"}
data.Announcement.update = {default:false, isReadOnly:false, displayName:"修改公告"}
data.Announcement.delete = {default:false, isReadOnly:false, displayName:"刪除公告"}
data.Announcement.create = {default:false, isReadOnly:false, displayName:"發佈新公告"}

data.Community = {}
data.Community.read = {default:true, isReadOnly:false, displayName:"讀社區資訊"}
data.Community.update = {default:false, isReadOnly:false, displayName:"更新社區資訊"}
data.Community.delete = {default:false, isReadOnly:false, displayName:"刪除社區"}
data.Community.create = {default:false, isReadOnly:false, displayName:"新增社區"}

data.CommunityRequisition = {}
data.CommunityRequisition.read = {default:false, isReadOnly:false, displayName:"讀新社區申請資料"}
data.CommunityRequisition.update = {default:false, isReadOnly:false, displayName:"修改新社區申請資料"}
data.CommunityRequisition.delete = {default:false, isReadOnly:false, displayName:"刪除新社區申請"}
data.CommunityRequisition.create = {default:false, isReadOnly:false, displayName:"申請新社區"}
data.CommunityRequisition.verify = {default:false, isReadOnly:false, displayName:"審核新社區申請"}

data.Member = {}
data.Member.COMMUNITY_ADMIN = {}
data.Member.COMMUNITY_ADMIN.read = {default:false, isReadOnly:false, displayName:"讀社區管理員資料"}
data.Member.COMMUNITY_ADMIN.update = {default:false, isReadOnly:false, displayName:"更新社區管理員資料"}
data.Member.COMMUNITY_ADMIN.delete = {default:false, isReadOnly:false, displayName:"刪除社區管理員"}
data.Member.COMMUNITY_ADMIN.create = {default:false, isReadOnly:false, displayName:"新增社區管理員"}
data.Member.GUARD = {}
data.Member.GUARD.read = {default:false, isReadOnly:false, displayName:"讀物業保全資料"}
data.Member.GUARD.update = {default:false, isReadOnly:false, displayName:"更新物業保全資料"}
data.Member.GUARD.delete = {default:false, isReadOnly:false, displayName:"刪除物業保全"}
data.Member.GUARD.create = {default:false, isReadOnly:false, displayName:"新增物業保全"}
data.Member.RESIDENT = {}
data.Member.RESIDENT.read = {default:false, isReadOnly:false, displayName:"讀住戶成員資料"}
data.Member.RESIDENT.update = {default:false, isReadOnly:false, displayName:"更新住戶成員資料"}
data.Member.RESIDENT.delete = {default:false, isReadOnly:false, displayName:"刪除住戶成員"}
data.Member.RESIDENT.create = {default:false, isReadOnly:false, displayName:"新增住戶成員"}
data.Member.RESIDENT_ADMIN = {}
data.Member.RESIDENT.read = {default:false, isReadOnly:false, displayName:"讀住戶管理員"}
data.Member.RESIDENT.update = {default:false, isReadOnly:false, displayName:"更新住戶管理員"}
data.Member.RESIDENT.delete = {default:false, isReadOnly:false, displayName:"刪除住戶管理員"}
data.Member.RESIDENT.create = {default:false, isReadOnly:false, displayName:"新增住戶管理員"}


data.InviteMember = {}
data.InviteMember.COMMUNITY_ADMIN = {}
data.InviteMember.COMMUNITY_ADMIN.read = {default:false, isReadOnly:false, displayName:"讀社區管理員邀請資料"}
data.InviteMember.COMMUNITY_ADMIN.update = {default:false, isReadOnly:false, displayName:"更新社區管理員邀請資料"}
data.InviteMember.COMMUNITY_ADMIN.delete = {default:false, isReadOnly:false, displayName:"取消社區管理員邀請"}
data.InviteMember.COMMUNITY_ADMIN.create = {default:false, isReadOnly:false, displayName:"邀請加入社區管理員"}
data.InviteMember.COMMUNITY_ADMIN.accept = {default:false, isReadOnly:false, displayName:"接受邀請加入社區管理員"}

data.InviteMember.GUARD = {}
data.InviteMember.GUARD.read = {default:false, isReadOnly:false, displayName:"讀物業保全邀請資料"}
data.InviteMember.GUARD.update = {default:false, isReadOnly:false, displayName:"更新物業保全邀請資料"}
data.InviteMember.GUARD.delete = {default:false, isReadOnly:false, displayName:"取消物業保全邀請"}
data.InviteMember.GUARD.create = {default:false, isReadOnly:false, displayName:"邀請加入物業保全"}
data.InviteMember.GUARD.accept = {default:false, isReadOnly:false, displayName:"接受邀請加入物業保全"}

data.InviteMember.RESIDENT_ADMIN = {}
data.InviteMember.RESIDENT_ADMIN.read = {default:false, isReadOnly:false, displayName:"讀住戶管理員邀請資料"}
data.InviteMember.RESIDENT_ADMIN.update = {default:false, isReadOnly:false, displayName:"更新住戶管理員邀請資料"}
data.InviteMember.RESIDENT_ADMIN.delete = {default:false, isReadOnly:false, displayName:"取消住戶管理員邀請"}
data.InviteMember.RESIDENT_ADMIN.create = {default:false, isReadOnly:false, displayName:"邀請加入住戶管理員"}
data.InviteMember.RESIDENT_ADMIN.accept = {default:false, isReadOnly:false, displayName:"接受邀請加入住戶管理員"}

data.InviteMember.RESIDENT = {}
data.InviteMember.RESIDENT.read = {default:false, isReadOnly:false, displayName:"讀住戶成員邀請資料"}
data.InviteMember.RESIDENT.update = {default:false, isReadOnly:false, displayName:"更新住戶成員邀請資料"}
data.InviteMember.RESIDENT.delete = {default:false, isReadOnly:false, displayName:"取消住戶成員邀請"}
data.InviteMember.RESIDENT.create = {default:false, isReadOnly:false, displayName:"邀請加入住戶成員"}
data.InviteMember.RESIDENT.accept = {default:false, isReadOnly:false, displayName:"接受邀請加入住戶成員"}

data.MemberInviteCode = {}
data.MemberInviteCode.COMMUNITY_ADMIN = {}
data.MemberInviteCode.COMMUNITY_ADMIN.read = {default:false, isReadOnly:false, displayName:"讀社區管理員邀請碼"}
data.MemberInviteCode.COMMUNITY_ADMIN.update = {default:false, isReadOnly:false, displayName:"更新社區管理員邀請碼"}
data.MemberInviteCode.COMMUNITY_ADMIN.delete = {default:false, isReadOnly:false, displayName:"刪除社區管理員邀請碼"}
data.MemberInviteCode.COMMUNITY_ADMIN.create = {default:false, isReadOnly:false, displayName:"新增社區管理員邀請碼"}
data.MemberInviteCode.COMMUNITY_ADMIN.verify = {default:false, isReadOnly:false, displayName:"驗證社區管理員邀請碼"}

data.MemberInviteCode.GUARD = {}
data.MemberInviteCode.GUARD.read = {default:false, isReadOnly:false, displayName:"讀物業保全邀請碼"}
data.MemberInviteCode.GUARD.update = {default:false, isReadOnly:false, displayName:"更新物業保全邀請碼"}
data.MemberInviteCode.GUARD.delete = {default:false, isReadOnly:false, displayName:"刪除物業保全邀請碼"}
data.MemberInviteCode.GUARD.create = {default:false, isReadOnly:false, displayName:"新增物業保全邀請碼"}
data.MemberInviteCode.GUARD.verify = {default:false, isReadOnly:false, displayName:"驗證物業保全邀請碼"}

data.MemberInviteCode.RESIDENT = {}
data.MemberInviteCode.RESIDENT.read = {default:false, isReadOnly:false, displayName:"讀住戶管理員邀請碼"}
data.MemberInviteCode.RESIDENT.update = {default:false, isReadOnly:false, displayName:"更新住戶管理員邀請碼"}
data.MemberInviteCode.RESIDENT.delete = {default:false, isReadOnly:false, displayName:"刪除住戶管理員邀請碼"}
data.MemberInviteCode.RESIDENT.create = {default:false, isReadOnly:false, displayName:"新增住戶管理員邀請碼"}
data.MemberInviteCode.RESIDENT.verify = {default:false, isReadOnly:false, displayName:"驗證住戶管理員邀請碼"}

data.MemberInviteCode.RESIDENT_ADMIN = {}
data.MemberInviteCode.RESIDENT_ADMIN.read = {default:false, isReadOnly:false, displayName:"讀住戶成員邀請碼"}
data.MemberInviteCode.RESIDENT_ADMIN.update = {default:false, isReadOnly:false, displayName:"更新住戶成員邀請碼"}
data.MemberInviteCode.RESIDENT_ADMIN.delete = {default:false, isReadOnly:false, displayName:"刪除住戶成員邀請碼"}
data.MemberInviteCode.RESIDENT_ADMIN.create = {default:false, isReadOnly:false, displayName:"新增住戶成員邀請碼"}
data.MemberInviteCode.RESIDENT_ADMIN.verify = {default:false, isReadOnly:false, displayName:"驗證住戶成員邀請碼"}

// data.CommunityMemberInviteCode.COMMUNITY_ADMIN.scan = {default:false, isReadOnly:false, displayName:"掃描社區管理員邀請碼"}

data.Household = {}
data.Household.read = {default:true, isReadOnly:false, displayName:"讀社區住戶資訊"}
data.Household.update = {default:false, isReadOnly:false, displayName:"更新社區住戶資訊"}
data.Household.delete = {default:false, isReadOnly:false, displayName:"刪除社區住戶"}
data.Household.create = {default:false, isReadOnly:false, displayName:"新增社區住戶"}

data.HouseholdRequisition = {}
data.HouseholdRequisition.read = {default:false, isReadOnly:false, displayName:"讀新住戶申請資料"}
data.HouseholdRequisition.update = {default:false, isReadOnly:false, displayName:"修改新住戶申請資料"}
data.HouseholdRequisition.delete = {default:false, isReadOnly:false, displayName:"刪除新住戶申請"}
data.HouseholdRequisition.create = {default:false, isReadOnly:false, displayName:"申請新住戶"}
data.HouseholdRequisition.verify = {default:false, isReadOnly:false, displayName:"審核新住戶申請"}

data.CommunityPermission = {}
data.CommunityPermission.COMMUNITY_ADMIN = {}
data.CommunityPermission.COMMUNITY_ADMIN.read = {default:false, isReadOnly:false, displayName:"讀社區管理員權限"}
data.CommunityPermission.COMMUNITY_ADMIN.update = {default:false, isReadOnly:false, displayName:"設定社區管理員權限"}

data.CommunityPermission.GUARD = {}
data.CommunityPermission.GUARD.read = {default:false, isReadOnly:false, displayName:"讀物業保全權限"}
data.CommunityPermission.GUARD.update = {default:false, isReadOnly:false, displayName:"設定物業保全權限"}


data.CommunityPermission.RESIDENT = {}
data.CommunityPermission.RESIDENT.read = {default:false, isReadOnly:false, displayName:"讀住戶成員權限"}
data.CommunityPermission.RESIDENT.update = {default:false, isReadOnly:false, displayName:"設定住戶成員權限"}

data.CommunityPermission.RESIDENT_ADMIN = {}
data.CommunityPermission.RESIDENT_ADMIN.read = {default:false, isReadOnly:false, displayName:"讀住戶管理員權限"}
data.CommunityPermission.RESIDENT_ADMIN.update = {default:false, isReadOnly:false, displayName:"設定住戶管理員權限"}

data.HouseholdPermission = {}
data.HouseholdPermission.read = {default:false, isReadOnly:false, displayName:"讀住戶權限"}
data.HouseholdPermission.update = {default:false, isReadOnly:false, displayName:"設定住戶權限"}

data.Package = {}
data.Package.read = {default:false, isReadOnly:false, displayName:"讀信件包裹資料"}
data.Package.update = {default:false, isReadOnly:false, displayName:"修改信件包裹資料"}
data.Package.delete = {default:false, isReadOnly:false, displayName:"刪除信件包裹"}
data.Package.create = {default:false, isReadOnly:false, displayName:"新增信件包裹"}

data.PackageReceiveCode = {}
data.PackageReceiveCode.read = {default:false, isReadOnly:false, displayName:"讀信件包裹領取序號"}
data.PackageReceiveCode.update = {default:false, isReadOnly:false, displayName:"更新信件包裹領取序號"}
data.PackageReceiveCode.delete = {default:false, isReadOnly:false, displayName:"刪除信件包裹領取序號"}
data.PackageReceiveCode.create = {default:false, isReadOnly:false, displayName:"新增信件包裹領取序號"}
data.PackageReceiveCode.verify = {default:false, isReadOnly:false, displayName:"驗證信件包裹領取序號"}

data.User = {}
data.User.read = {default:false, isReadOnly:false, displayName:"讀使用者資料"}
data.User.update = {default:false, isReadOnly:false, displayName:"更新使用者資料"}
data.User.delete = {default:false, isReadOnly:false, displayName:"刪除使用者"}
data.User.create = {default:false, isReadOnly:false, displayName:"新增使用者"}

data.SystemAdmin = {}
data.SystemAdmin.read = {default:false, isReadOnly:false, displayName:"讀系統管理員資料"}
data.SystemAdmin.update = {default:false, isReadOnly:false, displayName:"更新系統管理員資料"}
data.SystemAdmin.delete = {default:false, isReadOnly:false, displayName:"刪除系統管理員"}
data.SystemAdmin.create = {default:false, isReadOnly:false, displayName:"新增系統管理員"}

data.Invitation = {}
data.Invitation.read = {default:false, isReadOnly:false, displayName:"讀邀請單"}
data.Invitation.update = {default:false, isReadOnly:false, displayName:"更新邀請單"}
data.Invitation.delete = {default:false, isReadOnly:false, displayName:"刪除邀請單"}
data.Invitation.create = {default:false, isReadOnly:false, displayName:"新增邀請單"}

//console.log(data);

create(data);

