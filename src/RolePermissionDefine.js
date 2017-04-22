const db = require("./db");

function create(data) {
  var ref = db().ref("RolePermissionDefine");
  ref.set(data)
  .then(() => {
    console.log('ok');
  })
  .catch((error) => {
    console.log(error);
  })
}

var data = {}
var roleA = '', roleB = ''
const COMMUNITY_ADMIN = "COMMUNITY_ADMIN"
const GUARD = "GUARD"
const RESIDENT = "RESIDENT"
const RESIDENT_ADMIN = "RESIDENT_ADMIN"
const USER = "USER"
const SYSTEM_ADMIN = "SYSTEM_ADMIN"

// ==================== role:COMMUNITY_ADMIN ====================

data[COMMUNITY_ADMIN] = {}
data[COMMUNITY_ADMIN].Announcements = {create:true}
data[COMMUNITY_ADMIN].Announcements.own = {read:true, update:true, delete:true}
data[COMMUNITY_ADMIN].Announcements.other = {read:true, update:true, delete:true}

data[COMMUNITY_ADMIN].Communities = {create:false}
data[COMMUNITY_ADMIN].Communities.own = {read:true, update:true, delete:true}
data[COMMUNITY_ADMIN].Communities.other = {read:false, update:false, delete:false}

data[COMMUNITY_ADMIN].CommunityPermissions = {}
data[COMMUNITY_ADMIN].CommunityPermissions[COMMUNITY_ADMIN] = {create:false}
data[COMMUNITY_ADMIN].CommunityPermissions[COMMUNITY_ADMIN].own = {read:true, update:false, delete:false}
data[COMMUNITY_ADMIN].CommunityPermissions[COMMUNITY_ADMIN].other = {read:false, update:false, delete:false}
data[COMMUNITY_ADMIN].CommunityPermissions[GUARD] = {create:false}
data[COMMUNITY_ADMIN].CommunityPermissions[GUARD].own = {read:true, update:true, delete:false}
data[COMMUNITY_ADMIN].CommunityPermissions[GUARD].other = {read:false, update:false, delete:false}
data[COMMUNITY_ADMIN].CommunityPermissions[RESIDENT] = {create:false}
data[COMMUNITY_ADMIN].CommunityPermissions[RESIDENT].own = {read:true, update:true, delete:false}
data[COMMUNITY_ADMIN].CommunityPermissions[RESIDENT].other = {read:false, update:false, delete:false}
data[COMMUNITY_ADMIN].CommunityPermissions[RESIDENT_ADMIN] = {create:false}
data[COMMUNITY_ADMIN].CommunityPermissions[RESIDENT_ADMIN].own = {read:true, update:true, delete:false}
data[COMMUNITY_ADMIN].CommunityPermissions[RESIDENT_ADMIN].other = {read:false, update:false, delete:false}

data[COMMUNITY_ADMIN].CommunityRequisitions = {create:true, verify:false}
data[COMMUNITY_ADMIN].CommunityRequisitions.own = {read:true, update:true, delete:true}
data[COMMUNITY_ADMIN].CommunityRequisitions.other = {read:false, update:false, delete:false}

data[COMMUNITY_ADMIN].HouseholderRequisitions = {create:true, verify:true}
data[COMMUNITY_ADMIN].HouseholderRequisitions.own = {read:true, update:false, delete:true}
data[COMMUNITY_ADMIN].HouseholderRequisitions.other = {read:true, update:false, delete:true}

data[COMMUNITY_ADMIN].Householders = {create:true}
data[COMMUNITY_ADMIN].Householders.own = {read:true, update:false, delete:true}
data[COMMUNITY_ADMIN].Householders.other = {read:true, update:false, delete:true}

data[COMMUNITY_ADMIN].InviteMembers = {}
data[COMMUNITY_ADMIN].InviteMembers[COMMUNITY_ADMIN] = {}
data[COMMUNITY_ADMIN].InviteMembers[COMMUNITY_ADMIN] = {create:true, accept:true}
data[COMMUNITY_ADMIN].InviteMembers[COMMUNITY_ADMIN].own = {read:true, update:false, delete:true}
data[COMMUNITY_ADMIN].InviteMembers[COMMUNITY_ADMIN].other = {read:true, update:false, delete:false}

data[COMMUNITY_ADMIN].InviteMembers[GUARD] = {}
data[COMMUNITY_ADMIN].InviteMembers[GUARD] = {create:true, accept:true}
data[COMMUNITY_ADMIN].InviteMembers[GUARD].own = {read:true, update:false, delete:true}
data[COMMUNITY_ADMIN].InviteMembers[GUARD].other = {read:true, update:false, delete:false}

data[COMMUNITY_ADMIN].InviteMembers[RESIDENT] = {}
data[COMMUNITY_ADMIN].InviteMembers[RESIDENT] = {create:false, accept:true}
data[COMMUNITY_ADMIN].InviteMembers[RESIDENT].own = {read:false, update:false, delete:false}
data[COMMUNITY_ADMIN].InviteMembers[RESIDENT].other = {read:false, update:false, delete:false}

data[COMMUNITY_ADMIN].InviteMembers[RESIDENT_ADMIN] = {}
data[COMMUNITY_ADMIN].InviteMembers[RESIDENT_ADMIN] = {create:false, accept:true}
data[COMMUNITY_ADMIN].InviteMembers[RESIDENT_ADMIN].own = {read:false, update:false, delete:false}
data[COMMUNITY_ADMIN].InviteMembers[RESIDENT_ADMIN].other = {read:false, update:false, delete:false}

data[COMMUNITY_ADMIN].MemberInviteCodes = {}
data[COMMUNITY_ADMIN].MemberInviteCodes[COMMUNITY_ADMIN] = {}
data[COMMUNITY_ADMIN].MemberInviteCodes[COMMUNITY_ADMIN] = {create:true, verify:true}
data[COMMUNITY_ADMIN].MemberInviteCodes[COMMUNITY_ADMIN].own = {read:true, update:true, delete:true}
data[COMMUNITY_ADMIN].MemberInviteCodes[COMMUNITY_ADMIN].other = {read:false, update:false, delete:false}

data[COMMUNITY_ADMIN].MemberInviteCodes[GUARD] = {}
data[COMMUNITY_ADMIN].MemberInviteCodes[GUARD] = {create:true, verify:true}
data[COMMUNITY_ADMIN].MemberInviteCodes[GUARD].own = {read:true, update:true, delete:true}
data[COMMUNITY_ADMIN].MemberInviteCodes[GUARD].other = {read:false, update:false, delete:false}

data[COMMUNITY_ADMIN].MemberInviteCodes[RESIDENT] = {}
data[COMMUNITY_ADMIN].MemberInviteCodes[RESIDENT] = {create:false, verify:true}
data[COMMUNITY_ADMIN].MemberInviteCodes[RESIDENT].own = {read:false, update:false, delete:false}
data[COMMUNITY_ADMIN].MemberInviteCodes[RESIDENT].other = {read:false, update:false, delete:false}

data[COMMUNITY_ADMIN].MemberInviteCodes[RESIDENT_ADMIN] = {}
data[COMMUNITY_ADMIN].MemberInviteCodes[RESIDENT_ADMIN] = {create:false, verify:true}
data[COMMUNITY_ADMIN].MemberInviteCodes[RESIDENT_ADMIN].own = {read:false, update:false, delete:false}
data[COMMUNITY_ADMIN].MemberInviteCodes[RESIDENT_ADMIN].other = {read:false, update:false, delete:false}

data[COMMUNITY_ADMIN].Members = {}
data[COMMUNITY_ADMIN].Members[COMMUNITY_ADMIN] = {}
data[COMMUNITY_ADMIN].Members[COMMUNITY_ADMIN] = {create:false}
data[COMMUNITY_ADMIN].Members[COMMUNITY_ADMIN].own = {read:true, update:false, delete:true}
data[COMMUNITY_ADMIN].Members[COMMUNITY_ADMIN].other = {read:true, update:false, delete:false}

data[COMMUNITY_ADMIN].Members[GUARD] = {}
data[COMMUNITY_ADMIN].Members[GUARD] = {create:false}
data[COMMUNITY_ADMIN].Members[GUARD].own = {read:true, update:false, delete:false}
data[COMMUNITY_ADMIN].Members[GUARD].other = {read:true, update:false, delete:true}

data[COMMUNITY_ADMIN].Members[RESIDENT] = {}
data[COMMUNITY_ADMIN].Members[RESIDENT] = {create:false}
data[COMMUNITY_ADMIN].Members[RESIDENT].own = {read:true, update:false, delete:true}
data[COMMUNITY_ADMIN].Members[RESIDENT].other = {read:true, update:false, delete:true}

data[COMMUNITY_ADMIN].Members[RESIDENT_ADMIN] = {}
data[COMMUNITY_ADMIN].Members[RESIDENT_ADMIN] = {create:false}
data[COMMUNITY_ADMIN].Members[RESIDENT_ADMIN].own = {read:true, update:false, delete:true}
data[COMMUNITY_ADMIN].Members[RESIDENT_ADMIN].other = {read:true, update:false, delete:true}

data[COMMUNITY_ADMIN].PackageReceiveCodes = {}
data[COMMUNITY_ADMIN].PackageReceiveCodes = {create:false, verify:false}
data[COMMUNITY_ADMIN].PackageReceiveCodes.own = {read:false, update:false, delete:false}
data[COMMUNITY_ADMIN].PackageReceiveCodes.other = {read:false, update:false, delete:false}

data[COMMUNITY_ADMIN].Packages = {}
data[COMMUNITY_ADMIN].Packages = {create:false}
data[COMMUNITY_ADMIN].Packages.own = {read:false, update:false, delete:false}
data[COMMUNITY_ADMIN].Packages.other = {read:true, update:false, delete:false}

data[COMMUNITY_ADMIN].SystemAdmins = {}
data[COMMUNITY_ADMIN].SystemAdmins = {create:false}
data[COMMUNITY_ADMIN].SystemAdmins.own = {read:false, update:false, delete:false}
data[COMMUNITY_ADMIN].SystemAdmins.other = {read:false, update:false, delete:false}

data[COMMUNITY_ADMIN].Users = {}
data[COMMUNITY_ADMIN].Users = {create:false}
data[COMMUNITY_ADMIN].Users.own = {read:true, update:true, delete:true}
data[COMMUNITY_ADMIN].Users.other = {read:true, update:false, delete:false}

data[COMMUNITY_ADMIN].HouseholderPermissions = {}
data[COMMUNITY_ADMIN].HouseholderPermissions = {create:false}
data[COMMUNITY_ADMIN].HouseholderPermissions.own = {read:false, update:false, delete:false}
data[COMMUNITY_ADMIN].HouseholderPermissions.other = {read:false, update:false, delete:false}

// ==================== role:GUARD ====================

data[GUARD] = {}
data[GUARD].Announcements = {create:false}
data[GUARD].Announcements.own = {read:true, update:false, delete:false}
data[GUARD].Announcements.other = {read:true, update:false, delete:false}

data[GUARD].Communities = {create:false}
data[GUARD].Communities.own = {read:true, update:false, delete:false}
data[GUARD].Communities.other = {read:false, update:false, delete:false}

data[GUARD].CommunityPermissions = {}
data[GUARD].CommunityPermissions[COMMUNITY_ADMIN] = {create:false}
data[GUARD].CommunityPermissions[COMMUNITY_ADMIN].own = {read:false, update:false, delete:false}
data[GUARD].CommunityPermissions[COMMUNITY_ADMIN].other = {read:false, update:false, delete:false}
data[GUARD].CommunityPermissions[GUARD] = {create:false}
data[GUARD].CommunityPermissions[GUARD].own = {read:false, update:false, delete:false}
data[GUARD].CommunityPermissions[GUARD].other = {read:false, update:false, delete:false}
data[GUARD].CommunityPermissions[RESIDENT] = {create:false}
data[GUARD].CommunityPermissions[RESIDENT].own = {read:false, update:false, delete:false}
data[GUARD].CommunityPermissions[RESIDENT].other = {read:false, update:false, delete:false}
data[GUARD].CommunityPermissions[RESIDENT_ADMIN] = {create:false}
data[GUARD].CommunityPermissions[RESIDENT_ADMIN].own = {read:false, update:false, delete:false}
data[GUARD].CommunityPermissions[RESIDENT_ADMIN].other = {read:false, update:false, delete:false}

data[GUARD].CommunityRequisitions = {create:true, verify:false}
data[GUARD].CommunityRequisitions.own = {read:true, update:true, delete:true}
data[GUARD].CommunityRequisitions.other = {read:false, update:false, delete:false}

data[GUARD].HouseholderRequisitions = {create:true, verify:false}
data[GUARD].HouseholderRequisitions.own = {read:true, update:false, delete:true}
data[GUARD].HouseholderRequisitions.other = {read:false, update:false, delete:false}

data[GUARD].Householders = {create:false}
data[GUARD].Householders.own = {read:true, update:false, delete:false}
data[GUARD].Householders.other = {read:true, update:false, delete:false}

data[GUARD].InviteMembers = {}
data[GUARD].InviteMembers[COMMUNITY_ADMIN] = {}
data[GUARD].InviteMembers[COMMUNITY_ADMIN] = {create:false, accept:true}
data[GUARD].InviteMembers[COMMUNITY_ADMIN].own = {read:false, update:false, delete:false}
data[GUARD].InviteMembers[COMMUNITY_ADMIN].other = {read:false, update:false, delete:false}

data[GUARD].InviteMembers[GUARD] = {}
data[GUARD].InviteMembers[GUARD] = {create:false, accept:true}
data[GUARD].InviteMembers[GUARD].own = {read:true, update:false, delete:false}
data[GUARD].InviteMembers[GUARD].other = {read:true, update:false, delete:false}

data[GUARD].InviteMembers[RESIDENT] = {}
data[GUARD].InviteMembers[RESIDENT] = {create:false, accept:true}
data[GUARD].InviteMembers[RESIDENT].own = {read:false, update:false, delete:false}
data[GUARD].InviteMembers[RESIDENT].other = {read:false, update:false, delete:false}

data[GUARD].InviteMembers[RESIDENT_ADMIN] = {}
data[GUARD].InviteMembers[RESIDENT_ADMIN] = {create:false, accept:true}
data[GUARD].InviteMembers[RESIDENT_ADMIN].own = {read:false, update:false, delete:false}
data[GUARD].InviteMembers[RESIDENT_ADMIN].other = {read:false, update:false, delete:false}

data[GUARD].MemberInviteCodes = {}
data[GUARD].MemberInviteCodes[COMMUNITY_ADMIN] = {}
data[GUARD].MemberInviteCodes[COMMUNITY_ADMIN] = {create:false, verify:true}
data[GUARD].MemberInviteCodes[COMMUNITY_ADMIN].own = {read:false, update:false, delete:false}
data[GUARD].MemberInviteCodes[COMMUNITY_ADMIN].other = {read:false, update:false, delete:false}

data[GUARD].MemberInviteCodes[GUARD] = {}
data[GUARD].MemberInviteCodes[GUARD] = {create:false, verify:true}
data[GUARD].MemberInviteCodes[GUARD].own = {read:false, update:false, delete:false}
data[GUARD].MemberInviteCodes[GUARD].other = {read:false, update:false, delete:false}

data[GUARD].MemberInviteCodes[RESIDENT] = {}
data[GUARD].MemberInviteCodes[RESIDENT] = {create:false, verify:true}
data[GUARD].MemberInviteCodes[RESIDENT].own = {read:false, update:false, delete:false}
data[GUARD].MemberInviteCodes[RESIDENT].other = {read:false, update:false, delete:false}

data[GUARD].MemberInviteCodes[RESIDENT_ADMIN] = {}
data[GUARD].MemberInviteCodes[RESIDENT_ADMIN] = {create:false, verify:true}
data[GUARD].MemberInviteCodes[RESIDENT_ADMIN].own = {read:false, update:false, delete:false}
data[GUARD].MemberInviteCodes[RESIDENT_ADMIN].other = {read:false, update:false, delete:false}

data[GUARD].Members = {}
data[GUARD].Members[COMMUNITY_ADMIN] = {}
data[GUARD].Members[COMMUNITY_ADMIN] = {create:false}
data[GUARD].Members[COMMUNITY_ADMIN].own = {read:true, update:false, delete:false}
data[GUARD].Members[COMMUNITY_ADMIN].other = {read:true, update:false, delete:false}

data[GUARD].Members[GUARD] = {}
data[GUARD].Members[GUARD] = {create:false}
data[GUARD].Members[GUARD].own = {read:true, update:false, delete:false}
data[GUARD].Members[GUARD].other = {read:true, update:false, delete:false}

data[GUARD].Members[RESIDENT] = {}
data[GUARD].Members[RESIDENT] = {create:false}
data[GUARD].Members[RESIDENT].own = {read:true, update:false, delete:false}
data[GUARD].Members[RESIDENT].other = {read:true, update:false, delete:false}

data[GUARD].Members[RESIDENT_ADMIN] = {}
data[GUARD].Members[RESIDENT_ADMIN] = {create:false}
data[GUARD].Members[RESIDENT_ADMIN].own = {read:true, update:false, delete:false}
data[GUARD].Members[RESIDENT_ADMIN].other = {read:true, update:false, delete:false}

data[GUARD].PackageReceiveCodes = {}
data[GUARD].PackageReceiveCodes = {create:false, verify:true}
data[GUARD].PackageReceiveCodes.own = {read:false, update:false, delete:false}
data[GUARD].PackageReceiveCodes.other = {read:false, update:false, delete:false}

data[GUARD].Packages = {}
data[GUARD].Packages = {create:true}
data[GUARD].Packages.own = {read:true, update:false, delete:true}
data[GUARD].Packages.other = {read:true, update:false, delete:true}

data[GUARD].SystemAdmins = {}
data[GUARD].SystemAdmins = {create:false}
data[GUARD].SystemAdmins.own = {read:false, update:false, delete:false}
data[GUARD].SystemAdmins.other = {read:false, update:false, delete:false}

data[GUARD].Users = {}
data[GUARD].Users = {create:false}
data[GUARD].Users.own = {read:true, update:true, delete:true}
data[GUARD].Users.other = {read:true, update:false, delete:false}

data[GUARD].HouseholderPermissions = {}
data[GUARD].HouseholderPermissions = {create:false}
data[GUARD].HouseholderPermissions.own = {read:false, update:false, delete:false}
data[GUARD].HouseholderPermissions.other = {read:false, update:false, delete:false}

// ==================== role:RESIDENT ====================

data[RESIDENT] = {}
data[RESIDENT].Announcements = {create:false}
data[RESIDENT].Announcements.own = {read:true, update:false, delete:false}
data[RESIDENT].Announcements.other = {read:true, update:false, delete:false}

data[RESIDENT].Communities = {create:false}
data[RESIDENT].Communities.own = {read:true, update:false, delete:false}
data[RESIDENT].Communities.other = {read:false, update:false, delete:false}

data[RESIDENT].CommunityPermissions = {}
data[RESIDENT].CommunityPermissions[COMMUNITY_ADMIN] = {create:false}
data[RESIDENT].CommunityPermissions[COMMUNITY_ADMIN].own = {read:false, update:false, delete:false}
data[RESIDENT].CommunityPermissions[COMMUNITY_ADMIN].other = {read:false, update:false, delete:false}
data[RESIDENT].CommunityPermissions[GUARD] = {create:false}
data[RESIDENT].CommunityPermissions[GUARD].own = {read:false, update:false, delete:false}
data[RESIDENT].CommunityPermissions[GUARD].other = {read:false, update:false, delete:false}
data[RESIDENT].CommunityPermissions[RESIDENT] = {create:false}
data[RESIDENT].CommunityPermissions[RESIDENT].own = {read:false, update:false, delete:false}
data[RESIDENT].CommunityPermissions[RESIDENT].other = {read:false, update:false, delete:false}
data[RESIDENT].CommunityPermissions[RESIDENT_ADMIN] = {create:false}
data[RESIDENT].CommunityPermissions[RESIDENT_ADMIN].own = {read:false, update:false, delete:false}
data[RESIDENT].CommunityPermissions[RESIDENT_ADMIN].other = {read:false, update:false, delete:false}

data[RESIDENT].CommunityRequisitions = {create:true, verify:false}
data[RESIDENT].CommunityRequisitions.own = {read:true, update:true, delete:true}
data[RESIDENT].CommunityRequisitions.other = {read:false, update:false, delete:false}

data[RESIDENT].HouseholderRequisitions = {create:true, verify:false}
data[RESIDENT].HouseholderRequisitions.own = {read:true, update:false, delete:true}
data[RESIDENT].HouseholderRequisitions.other = {read:false, update:false, delete:false}

data[RESIDENT].Householders = {create:false}
data[RESIDENT].Householders.own = {read:true, update:false, delete:false}
data[RESIDENT].Householders.other = {read:false, update:false, delete:false}

data[RESIDENT].InviteMembers = {}
data[RESIDENT].InviteMembers[COMMUNITY_ADMIN] = {}
data[RESIDENT].InviteMembers[COMMUNITY_ADMIN] = {create:false, accept:true}
data[RESIDENT].InviteMembers[COMMUNITY_ADMIN].own = {read:false, update:false, delete:false}
data[RESIDENT].InviteMembers[COMMUNITY_ADMIN].other = {read:false, update:false, delete:false}

data[RESIDENT].InviteMembers[GUARD] = {}
data[RESIDENT].InviteMembers[GUARD] = {create:false, accept:true}
data[RESIDENT].InviteMembers[GUARD].own = {read:false, update:false, delete:false}
data[RESIDENT].InviteMembers[GUARD].other = {read:false, update:false, delete:false}

data[RESIDENT].InviteMembers[RESIDENT] = {}
data[RESIDENT].InviteMembers[RESIDENT] = {create:true, accept:true}
data[RESIDENT].InviteMembers[RESIDENT].own = {read:true, update:false, delete:true}
data[RESIDENT].InviteMembers[RESIDENT].other = {read:true, update:false, delete:false}

data[RESIDENT].InviteMembers[RESIDENT_ADMIN] = {}
data[RESIDENT].InviteMembers[RESIDENT_ADMIN] = {create:false, accept:true}
data[RESIDENT].InviteMembers[RESIDENT_ADMIN].own = {read:true, update:false, delete:false}
data[RESIDENT].InviteMembers[RESIDENT_ADMIN].other = {read:true, update:false, delete:false}

data[RESIDENT].MemberInviteCodes = {}
data[RESIDENT].MemberInviteCodes[COMMUNITY_ADMIN] = {}
data[RESIDENT].MemberInviteCodes[COMMUNITY_ADMIN] = {create:false, verify:true}
data[RESIDENT].MemberInviteCodes[COMMUNITY_ADMIN].own = {read:false, update:false, delete:false}
data[RESIDENT].MemberInviteCodes[COMMUNITY_ADMIN].other = {read:false, update:false, delete:false}

data[RESIDENT].MemberInviteCodes[GUARD] = {}
data[RESIDENT].MemberInviteCodes[GUARD] = {create:false, verify:true}
data[RESIDENT].MemberInviteCodes[GUARD].own = {read:false, update:false, delete:false}
data[RESIDENT].MemberInviteCodes[GUARD].other = {read:false, update:false, delete:false}

data[RESIDENT].MemberInviteCodes[RESIDENT] = {}
data[RESIDENT].MemberInviteCodes[RESIDENT] = {create:true, verify:true}
data[RESIDENT].MemberInviteCodes[RESIDENT].own = {read:true, update:true, delete:true}
data[RESIDENT].MemberInviteCodes[RESIDENT].other = {read:false, update:false, delete:false}

data[RESIDENT].MemberInviteCodes[RESIDENT_ADMIN] = {}
data[RESIDENT].MemberInviteCodes[RESIDENT_ADMIN] = {create:false, verify:true}
data[RESIDENT].MemberInviteCodes[RESIDENT_ADMIN].own = {read:false, update:false, delete:false}
data[RESIDENT].MemberInviteCodes[RESIDENT_ADMIN].other = {read:false, update:false, delete:false}

data[RESIDENT].Members = {}
data[RESIDENT].Members[COMMUNITY_ADMIN] = {}
data[RESIDENT].Members[COMMUNITY_ADMIN] = {create:false}
data[RESIDENT].Members[COMMUNITY_ADMIN].own = {read:true, update:false, delete:false}
data[RESIDENT].Members[COMMUNITY_ADMIN].other = {read:true, update:false, delete:false}

data[RESIDENT].Members[GUARD] = {}
data[RESIDENT].Members[GUARD] = {create:false}
data[RESIDENT].Members[GUARD].own = {read:true, update:false, delete:false}
data[RESIDENT].Members[GUARD].other = {read:true, update:false, delete:false}

data[RESIDENT].Members[RESIDENT] = {}
data[RESIDENT].Members[RESIDENT] = {create:false}
data[RESIDENT].Members[RESIDENT].own = {read:true, update:false, delete:true}
data[RESIDENT].Members[RESIDENT].other = {read:true, update:false, delete:false}

data[RESIDENT].Members[RESIDENT_ADMIN] = {}
data[RESIDENT].Members[RESIDENT_ADMIN] = {create:false}
data[RESIDENT].Members[RESIDENT_ADMIN].own = {read:true, update:false, delete:false}
data[RESIDENT].Members[RESIDENT_ADMIN].other = {read:true, update:false, delete:false}

data[RESIDENT].PackageReceiveCodes = {}
data[RESIDENT].PackageReceiveCodes = {create:true, verify:false}
data[RESIDENT].PackageReceiveCodes.own = {read:true, update:true, delete:true}
data[RESIDENT].PackageReceiveCodes.other = {read:false, update:false, delete:false}

data[RESIDENT].Packages = {}
data[RESIDENT].Packages = {create:false}
data[RESIDENT].Packages.own = {read:true, update:false, delete:false}
data[RESIDENT].Packages.other = {read:true, update:false, delete:false}

data[RESIDENT].SystemAdmins = {}
data[RESIDENT].SystemAdmins = {create:false}
data[RESIDENT].SystemAdmins.own = {read:false, update:false, delete:false}
data[RESIDENT].SystemAdmins.other = {read:false, update:false, delete:false}

data[RESIDENT].Users = {}
data[RESIDENT].Users = {create:false}
data[RESIDENT].Users.own = {read:true, update:true, delete:true}
data[RESIDENT].Users.other = {read:true, update:false, delete:false}

data[RESIDENT].HouseholderPermissions = {}
data[RESIDENT].HouseholderPermissions = {create:false}
data[RESIDENT].HouseholderPermissions.own = {read:false, update:false, delete:false}
data[RESIDENT].HouseholderPermissions.other = {read:false, update:false, delete:false}

// ==================== role:RESIDENT_ADMIN ====================

data[RESIDENT_ADMIN] = {}
data[RESIDENT_ADMIN].Announcements = {create:false}
data[RESIDENT_ADMIN].Announcements.own = {read:true, update:false, delete:false}
data[RESIDENT_ADMIN].Announcements.other = {read:true, update:false, delete:false}

data[RESIDENT_ADMIN].Communities = {create:false}
data[RESIDENT_ADMIN].Communities.own = {read:true, update:false, delete:false}
data[RESIDENT_ADMIN].Communities.other = {read:false, update:false, delete:false}

data[RESIDENT_ADMIN].CommunityPermissions = {}
data[RESIDENT_ADMIN].CommunityPermissions[COMMUNITY_ADMIN] = {create:false}
data[RESIDENT_ADMIN].CommunityPermissions[COMMUNITY_ADMIN].own = {read:false, update:false, delete:false}
data[RESIDENT_ADMIN].CommunityPermissions[COMMUNITY_ADMIN].other = {read:false, update:false, delete:false}
data[RESIDENT_ADMIN].CommunityPermissions[GUARD] = {create:false}
data[RESIDENT_ADMIN].CommunityPermissions[GUARD].own = {read:false, update:false, delete:false}
data[RESIDENT_ADMIN].CommunityPermissions[GUARD].other = {read:false, update:false, delete:false}
data[RESIDENT_ADMIN].CommunityPermissions[RESIDENT] = {create:false}
data[RESIDENT_ADMIN].CommunityPermissions[RESIDENT].own = {read:false, update:false, delete:false}
data[RESIDENT_ADMIN].CommunityPermissions[RESIDENT].other = {read:false, update:false, delete:false}
data[RESIDENT_ADMIN].CommunityPermissions[RESIDENT_ADMIN] = {create:false}
data[RESIDENT_ADMIN].CommunityPermissions[RESIDENT_ADMIN].own = {read:false, update:false, delete:false}
data[RESIDENT_ADMIN].CommunityPermissions[RESIDENT_ADMIN].other = {read:false, update:false, delete:false}

data[RESIDENT_ADMIN].CommunityRequisitions = {create:true, verify:false}
data[RESIDENT_ADMIN].CommunityRequisitions.own = {read:true, update:true, delete:true}
data[RESIDENT_ADMIN].CommunityRequisitions.other = {read:false, update:false, delete:false}

data[RESIDENT_ADMIN].HouseholderRequisitions = {create:true, verify:false}
data[RESIDENT_ADMIN].HouseholderRequisitions.own = {read:true, update:false, delete:true}
data[RESIDENT_ADMIN].HouseholderRequisitions.other = {read:false, update:false, delete:false}

data[RESIDENT_ADMIN].Householders = {create:false}
data[RESIDENT_ADMIN].Householders.own = {read:true, update:false, delete:true}
data[RESIDENT_ADMIN].Householders.other = {read:false, update:false, delete:false}

data[RESIDENT_ADMIN].InviteMembers = {}
data[RESIDENT_ADMIN].InviteMembers[COMMUNITY_ADMIN] = {}
data[RESIDENT_ADMIN].InviteMembers[COMMUNITY_ADMIN] = {create:false, accept:true}
data[RESIDENT_ADMIN].InviteMembers[COMMUNITY_ADMIN].own = {read:false, update:false, delete:false}
data[RESIDENT_ADMIN].InviteMembers[COMMUNITY_ADMIN].other = {read:false, update:false, delete:false}

data[RESIDENT_ADMIN].InviteMembers[GUARD] = {}
data[RESIDENT_ADMIN].InviteMembers[GUARD] = {create:false, accept:true}
data[RESIDENT_ADMIN].InviteMembers[GUARD].own = {read:false, update:false, delete:false}
data[RESIDENT_ADMIN].InviteMembers[GUARD].other = {read:false, update:false, delete:false}

data[RESIDENT_ADMIN].InviteMembers[RESIDENT] = {}
data[RESIDENT_ADMIN].InviteMembers[RESIDENT] = {create:true, accept:true}
data[RESIDENT_ADMIN].InviteMembers[RESIDENT].own = {read:true, update:false, delete:true}
data[RESIDENT_ADMIN].InviteMembers[RESIDENT].other = {read:true, update:false, delete:false}

data[RESIDENT_ADMIN].InviteMembers[RESIDENT_ADMIN] = {}
data[RESIDENT_ADMIN].InviteMembers[RESIDENT_ADMIN] = {create:true, accept:true}
data[RESIDENT_ADMIN].InviteMembers[RESIDENT_ADMIN].own = {read:true, update:false, delete:true}
data[RESIDENT_ADMIN].InviteMembers[RESIDENT_ADMIN].other = {read:true, update:false, delete:false}

data[RESIDENT_ADMIN].MemberInviteCodes = {}
data[RESIDENT_ADMIN].MemberInviteCodes[COMMUNITY_ADMIN] = {}
data[RESIDENT_ADMIN].MemberInviteCodes[COMMUNITY_ADMIN] = {create:false, verify:true}
data[RESIDENT_ADMIN].MemberInviteCodes[COMMUNITY_ADMIN].own = {read:false, update:false, delete:false}
data[RESIDENT_ADMIN].MemberInviteCodes[COMMUNITY_ADMIN].other = {read:false, update:false, delete:false}

data[RESIDENT_ADMIN].MemberInviteCodes[GUARD] = {}
data[RESIDENT_ADMIN].MemberInviteCodes[GUARD] = {create:false, verify:true}
data[RESIDENT_ADMIN].MemberInviteCodes[GUARD].own = {read:false, update:false, delete:false}
data[RESIDENT_ADMIN].MemberInviteCodes[GUARD].other = {read:false, update:false, delete:false}

data[RESIDENT_ADMIN].MemberInviteCodes[RESIDENT] = {}
data[RESIDENT_ADMIN].MemberInviteCodes[RESIDENT] = {create:true, verify:true}
data[RESIDENT_ADMIN].MemberInviteCodes[RESIDENT].own = {read:true, update:true, delete:true}
data[RESIDENT_ADMIN].MemberInviteCodes[RESIDENT].other = {read:false, update:false, delete:false}

data[RESIDENT_ADMIN].MemberInviteCodes[RESIDENT_ADMIN] = {}
data[RESIDENT_ADMIN].MemberInviteCodes[RESIDENT_ADMIN] = {create:true, verify:true}
data[RESIDENT_ADMIN].MemberInviteCodes[RESIDENT_ADMIN].own = {read:true, update:true, delete:true}
data[RESIDENT_ADMIN].MemberInviteCodes[RESIDENT_ADMIN].other = {read:false, update:false, delete:false}

data[RESIDENT_ADMIN].Members = {}
data[RESIDENT_ADMIN].Members[COMMUNITY_ADMIN] = {}
data[RESIDENT_ADMIN].Members[COMMUNITY_ADMIN] = {create:false}
data[RESIDENT_ADMIN].Members[COMMUNITY_ADMIN].own = {read:true, update:false, delete:false}
data[RESIDENT_ADMIN].Members[COMMUNITY_ADMIN].other = {read:true, update:false, delete:false}

data[RESIDENT_ADMIN].Members[GUARD] = {}
data[RESIDENT_ADMIN].Members[GUARD] = {create:false}
data[RESIDENT_ADMIN].Members[GUARD].own = {read:true, update:false, delete:false}
data[RESIDENT_ADMIN].Members[GUARD].other = {read:true, update:false, delete:false}

data[RESIDENT_ADMIN].Members[RESIDENT] = {}
data[RESIDENT_ADMIN].Members[RESIDENT] = {create:false}
data[RESIDENT_ADMIN].Members[RESIDENT].own = {read:true, update:false, delete:false}
data[RESIDENT_ADMIN].Members[RESIDENT].other = {read:true, update:false, delete:true}

data[RESIDENT_ADMIN].Members[RESIDENT_ADMIN] = {}
data[RESIDENT_ADMIN].Members[RESIDENT_ADMIN] = {create:false}
data[RESIDENT_ADMIN].Members[RESIDENT_ADMIN].own = {read:true, update:false, delete:true}
data[RESIDENT_ADMIN].Members[RESIDENT_ADMIN].other = {read:true, update:false, delete:false}

data[RESIDENT_ADMIN].PackageReceiveCodes = {}
data[RESIDENT_ADMIN].PackageReceiveCodes = {create:true, verify:false}
data[RESIDENT_ADMIN].PackageReceiveCodes.own = {read:true, update:true, delete:true}
data[RESIDENT_ADMIN].PackageReceiveCodes.other = {read:false, update:false, delete:false}

data[RESIDENT_ADMIN].Packages = {}
data[RESIDENT_ADMIN].Packages = {create:false}
data[RESIDENT_ADMIN].Packages.own = {read:true, update:false, delete:false}
data[RESIDENT_ADMIN].Packages.other = {read:true, update:false, delete:false}

data[RESIDENT_ADMIN].SystemAdmins = {}
data[RESIDENT_ADMIN].SystemAdmins = {create:false}
data[RESIDENT_ADMIN].SystemAdmins.own = {read:false, update:false, delete:false}
data[RESIDENT_ADMIN].SystemAdmins.other = {read:false, update:false, delete:false}

data[RESIDENT_ADMIN].Users = {}
data[RESIDENT_ADMIN].Users = {create:false}
data[RESIDENT_ADMIN].Users.own = {read:true, update:true, delete:true}
data[RESIDENT_ADMIN].Users.other = {read:true, update:false, delete:false}

data[RESIDENT_ADMIN].HouseholderPermissions = {}
data[RESIDENT_ADMIN].HouseholderPermissions = {create:false}
data[RESIDENT_ADMIN].HouseholderPermissions.own = {read:true, update:true, delete:false}
data[RESIDENT_ADMIN].HouseholderPermissions.other = {read:false, update:false, delete:false}

// ==================== role:SYSTEM_ADMIN ====================

data[SYSTEM_ADMIN] = {}
data[SYSTEM_ADMIN].Announcements = {create:true}
data[SYSTEM_ADMIN].Announcements.own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].Announcements.other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].Communities = {create:true}
data[SYSTEM_ADMIN].Communities.own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].Communities.other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].CommunityPermissions = {}
data[SYSTEM_ADMIN].CommunityPermissions[COMMUNITY_ADMIN] = {create:true}
data[SYSTEM_ADMIN].CommunityPermissions[COMMUNITY_ADMIN].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].CommunityPermissions[COMMUNITY_ADMIN].other = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].CommunityPermissions[GUARD] = {create:true}
data[SYSTEM_ADMIN].CommunityPermissions[GUARD].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].CommunityPermissions[GUARD].other = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].CommunityPermissions[RESIDENT] = {create:true}
data[SYSTEM_ADMIN].CommunityPermissions[RESIDENT].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].CommunityPermissions[RESIDENT].other = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].CommunityPermissions[RESIDENT_ADMIN] = {create:true}
data[SYSTEM_ADMIN].CommunityPermissions[RESIDENT_ADMIN].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].CommunityPermissions[RESIDENT_ADMIN].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].CommunityRequisitions = {create:true, verify:true}
data[SYSTEM_ADMIN].CommunityRequisitions.own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].CommunityRequisitions.other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].HouseholderRequisitions = {create:true, verify:true}
data[SYSTEM_ADMIN].HouseholderRequisitions.own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].HouseholderRequisitions.other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].Householders = {create:true}
data[SYSTEM_ADMIN].Householders.own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].Householders.other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].InviteMembers = {}
data[SYSTEM_ADMIN].InviteMembers[COMMUNITY_ADMIN] = {}
data[SYSTEM_ADMIN].InviteMembers[COMMUNITY_ADMIN] = {create:true, accept:true}
data[SYSTEM_ADMIN].InviteMembers[COMMUNITY_ADMIN].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].InviteMembers[COMMUNITY_ADMIN].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].InviteMembers[GUARD] = {}
data[SYSTEM_ADMIN].InviteMembers[GUARD] = {create:true, accept:true}
data[SYSTEM_ADMIN].InviteMembers[GUARD].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].InviteMembers[GUARD].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].InviteMembers[RESIDENT] = {}
data[SYSTEM_ADMIN].InviteMembers[RESIDENT] = {create:true, accept:true}
data[SYSTEM_ADMIN].InviteMembers[RESIDENT].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].InviteMembers[RESIDENT].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].InviteMembers[RESIDENT_ADMIN] = {}
data[SYSTEM_ADMIN].InviteMembers[RESIDENT_ADMIN] = {create:true, accept:true}
data[SYSTEM_ADMIN].InviteMembers[RESIDENT_ADMIN].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].InviteMembers[RESIDENT_ADMIN].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].MemberInviteCodes = {}
data[SYSTEM_ADMIN].MemberInviteCodes[COMMUNITY_ADMIN] = {}
data[SYSTEM_ADMIN].MemberInviteCodes[COMMUNITY_ADMIN] = {create:true, verify:true}
data[SYSTEM_ADMIN].MemberInviteCodes[COMMUNITY_ADMIN].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].MemberInviteCodes[COMMUNITY_ADMIN].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].MemberInviteCodes[GUARD] = {}
data[SYSTEM_ADMIN].MemberInviteCodes[GUARD] = {create:true, verify:true}
data[SYSTEM_ADMIN].MemberInviteCodes[GUARD].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].MemberInviteCodes[GUARD].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].MemberInviteCodes[RESIDENT] = {}
data[SYSTEM_ADMIN].MemberInviteCodes[RESIDENT] = {create:true, verify:true}
data[SYSTEM_ADMIN].MemberInviteCodes[RESIDENT].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].MemberInviteCodes[RESIDENT].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].MemberInviteCodes[RESIDENT_ADMIN] = {}
data[SYSTEM_ADMIN].MemberInviteCodes[RESIDENT_ADMIN] = {create:true, verify:true}
data[SYSTEM_ADMIN].MemberInviteCodes[RESIDENT_ADMIN].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].MemberInviteCodes[RESIDENT_ADMIN].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].Members = {}
data[SYSTEM_ADMIN].Members[COMMUNITY_ADMIN] = {}
data[SYSTEM_ADMIN].Members[COMMUNITY_ADMIN] = {create:true}
data[SYSTEM_ADMIN].Members[COMMUNITY_ADMIN].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].Members[COMMUNITY_ADMIN].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].Members[GUARD] = {}
data[SYSTEM_ADMIN].Members[GUARD] = {create:true}
data[SYSTEM_ADMIN].Members[GUARD].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].Members[GUARD].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].Members[RESIDENT] = {}
data[SYSTEM_ADMIN].Members[RESIDENT] = {create:true}
data[SYSTEM_ADMIN].Members[RESIDENT].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].Members[RESIDENT].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].Members[RESIDENT_ADMIN] = {}
data[SYSTEM_ADMIN].Members[RESIDENT_ADMIN] = {create:true}
data[SYSTEM_ADMIN].Members[RESIDENT_ADMIN].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].Members[RESIDENT_ADMIN].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].PackageReceiveCodes = {}
data[SYSTEM_ADMIN].PackageReceiveCodes = {create:true, verify:true}
data[SYSTEM_ADMIN].PackageReceiveCodes.own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].PackageReceiveCodes.other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].Packages = {}
data[SYSTEM_ADMIN].Packages = {create:true}
data[SYSTEM_ADMIN].Packages.own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].Packages.other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].SystemAdmins = {}
data[SYSTEM_ADMIN].SystemAdmins = {create:true}
data[SYSTEM_ADMIN].SystemAdmins.own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].SystemAdmins.other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].Users = {}
data[SYSTEM_ADMIN].Users = {create:true}
data[SYSTEM_ADMIN].Users.own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].Users.other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].HouseholderPermissions = {}
data[SYSTEM_ADMIN].HouseholderPermissions = {create:true}
data[SYSTEM_ADMIN].HouseholderPermissions.own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].HouseholderPermissions.other = {read:true, update:true, delete:true}

// ==================== role:USER ====================

data[USER] = {}
data[USER].Announcements = {create:false}
data[USER].Announcements.own = {read:false, update:false, delete:false}
data[USER].Announcements.other = {read:false, update:false, delete:false}

data[USER].Communities = {create:false}
data[USER].Communities.own = {read:false, update:false, delete:false}
data[USER].Communities.other = {read:false, update:false, delete:false}

data[USER].CommunityPermissions = {}
data[USER].CommunityPermissions[COMMUNITY_ADMIN] = {create:false}
data[USER].CommunityPermissions[COMMUNITY_ADMIN].own = {read:false, update:false, delete:false}
data[USER].CommunityPermissions[COMMUNITY_ADMIN].other = {read:false, update:false, delete:false}
data[USER].CommunityPermissions[GUARD] = {create:false}
data[USER].CommunityPermissions[GUARD].own = {read:false, update:false, delete:false}
data[USER].CommunityPermissions[GUARD].other = {read:false, update:false, delete:false}
data[USER].CommunityPermissions[RESIDENT] = {create:false}
data[USER].CommunityPermissions[RESIDENT].own = {read:false, update:false, delete:false}
data[USER].CommunityPermissions[RESIDENT].other = {read:false, update:false, delete:false}
data[USER].CommunityPermissions[RESIDENT_ADMIN] = {create:false}
data[USER].CommunityPermissions[RESIDENT_ADMIN].own = {read:false, update:false, delete:false}
data[USER].CommunityPermissions[RESIDENT_ADMIN].other = {read:false, update:false, delete:false}

data[USER].CommunityRequisitions = {create:true, verify:false}
data[USER].CommunityRequisitions.own = {read:true, update:true, delete:true}
data[USER].CommunityRequisitions.other = {read:false, update:false, delete:false}

data[USER].HouseholderRequisitions = {create:true, verify:false}
data[USER].HouseholderRequisitions.own = {read:true, update:false, delete:true}
data[USER].HouseholderRequisitions.other = {read:false, update:false, delete:false}

data[USER].Householders = {create:false}
data[USER].Householders.own = {read:false, update:false, delete:false}
data[USER].Householders.other = {read:false, update:false, delete:false}

data[USER].InviteMembers = {}
data[USER].InviteMembers[COMMUNITY_ADMIN] = {}
data[USER].InviteMembers[COMMUNITY_ADMIN] = {create:false, accept:true}
data[USER].InviteMembers[COMMUNITY_ADMIN].own = {read:false, update:false, delete:false}
data[USER].InviteMembers[COMMUNITY_ADMIN].other = {read:false, update:false, delete:false}

data[USER].InviteMembers[GUARD] = {}
data[USER].InviteMembers[GUARD] = {create:false, accept:true}
data[USER].InviteMembers[GUARD].own = {read:false, update:false, delete:false}
data[USER].InviteMembers[GUARD].other = {read:false, update:false, delete:false}

data[USER].InviteMembers[RESIDENT] = {}
data[USER].InviteMembers[RESIDENT] = {create:false, accept:true}
data[USER].InviteMembers[RESIDENT].own = {read:false, update:false, delete:false}
data[USER].InviteMembers[RESIDENT].other = {read:false, update:false, delete:false}

data[USER].InviteMembers[RESIDENT_ADMIN] = {}
data[USER].InviteMembers[RESIDENT_ADMIN] = {create:false, accept:true}
data[USER].InviteMembers[RESIDENT_ADMIN].own = {read:false, update:false, delete:false}
data[USER].InviteMembers[RESIDENT_ADMIN].other = {read:false, update:false, delete:false}

data[USER].MemberInviteCodes = {}
data[USER].MemberInviteCodes[COMMUNITY_ADMIN] = {}
data[USER].MemberInviteCodes[COMMUNITY_ADMIN] = {create:false, verify:true}
data[USER].MemberInviteCodes[COMMUNITY_ADMIN].own = {read:false, update:false, delete:false}
data[USER].MemberInviteCodes[COMMUNITY_ADMIN].other = {read:false, update:false, delete:false}

data[USER].MemberInviteCodes[GUARD] = {}
data[USER].MemberInviteCodes[GUARD] = {create:false, verify:true}
data[USER].MemberInviteCodes[GUARD].own = {read:false, update:false, delete:false}
data[USER].MemberInviteCodes[GUARD].other = {read:false, update:false, delete:false}

data[USER].MemberInviteCodes[RESIDENT] = {}
data[USER].MemberInviteCodes[RESIDENT] = {create:false, verify:true}
data[USER].MemberInviteCodes[RESIDENT].own = {read:false, update:false, delete:false}
data[USER].MemberInviteCodes[RESIDENT].other = {read:false, update:false, delete:false}

data[USER].MemberInviteCodes[RESIDENT_ADMIN] = {}
data[USER].MemberInviteCodes[RESIDENT_ADMIN] = {create:false, verify:true}
data[USER].MemberInviteCodes[RESIDENT_ADMIN].own = {read:false, update:false, delete:false}
data[USER].MemberInviteCodes[RESIDENT_ADMIN].other = {read:false, update:false, delete:false}

data[USER].Members = {}
data[USER].Members[COMMUNITY_ADMIN] = {}
data[USER].Members[COMMUNITY_ADMIN] = {create:false}
data[USER].Members[COMMUNITY_ADMIN].own = {read:false, update:false, delete:false}
data[USER].Members[COMMUNITY_ADMIN].other = {read:false, update:false, delete:false}

data[USER].Members[GUARD] = {}
data[USER].Members[GUARD] = {create:false}
data[USER].Members[GUARD].own = {read:false, update:false, delete:false}
data[USER].Members[GUARD].other = {read:false, update:false, delete:false}

data[USER].Members[RESIDENT] = {}
data[USER].Members[RESIDENT] = {create:false}
data[USER].Members[RESIDENT].own = {read:false, update:false, delete:false}
data[USER].Members[RESIDENT].other = {read:false, update:false, delete:false}

data[USER].Members[RESIDENT_ADMIN] = {}
data[USER].Members[RESIDENT_ADMIN] = {create:false}
data[USER].Members[RESIDENT_ADMIN].own = {read:false, update:false, delete:false}
data[USER].Members[RESIDENT_ADMIN].other = {read:false, update:false, delete:false}

data[USER].PackageReceiveCodes = {}
data[USER].PackageReceiveCodes = {create:false, verify:false}
data[USER].PackageReceiveCodes.own = {read:false, update:false, delete:false}
data[USER].PackageReceiveCodes.other = {read:false, update:false, delete:false}

data[USER].Packages = {}
data[USER].Packages = {create:false}
data[USER].Packages.own = {read:false, update:false, delete:false}
data[USER].Packages.other = {read:false, update:false, delete:false}

data[USER].SystemAdmins = {}
data[USER].SystemAdmins = {create:false}
data[USER].SystemAdmins.own = {read:false, update:false, delete:false}
data[USER].SystemAdmins.other = {read:false, update:false, delete:false}

data[USER].Users = {}
data[USER].Users = {create:true}
data[USER].Users.own = {read:true, update:true, delete:true}
data[USER].Users.other = {read:true, update:false, delete:false}

data[USER].HouseholderPermissions = {}
data[USER].HouseholderPermissions = {create:false}
data[USER].HouseholderPermissions.own = {read:false, update:false, delete:false}
data[USER].HouseholderPermissions.other = {read:false, update:false, delete:false}


create(data);