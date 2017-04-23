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

data[COMMUNITY_ADMIN].Communities = {}
data[COMMUNITY_ADMIN].Communities.own = {read:true, update:true, delete:true}

data[COMMUNITY_ADMIN].CommunityPermissions = {}
data[COMMUNITY_ADMIN].CommunityPermissions[COMMUNITY_ADMIN] = {}
data[COMMUNITY_ADMIN].CommunityPermissions[COMMUNITY_ADMIN].own = {read:true}
data[COMMUNITY_ADMIN].CommunityPermissions[GUARD] = {}
data[COMMUNITY_ADMIN].CommunityPermissions[GUARD].own = {read:true, update:true}
data[COMMUNITY_ADMIN].CommunityPermissions[RESIDENT] = {}
data[COMMUNITY_ADMIN].CommunityPermissions[RESIDENT].own = {read:true, update:true}
data[COMMUNITY_ADMIN].CommunityPermissions[RESIDENT_ADMIN] = {}
data[COMMUNITY_ADMIN].CommunityPermissions[RESIDENT_ADMIN].own = {read:true, update:true}

data[COMMUNITY_ADMIN].CommunityRequisitions = {create:true}
data[COMMUNITY_ADMIN].CommunityRequisitions.own = {read:true, update:true, delete:true}

data[COMMUNITY_ADMIN].HouseholderRequisitions = {create:true, verify:true}
data[COMMUNITY_ADMIN].HouseholderRequisitions.own = {read:true, delete:true}
data[COMMUNITY_ADMIN].HouseholderRequisitions.other = {read:true, delete:true}

data[COMMUNITY_ADMIN].Householders = {create:true}
data[COMMUNITY_ADMIN].Householders.own = {read:true, delete:true}
data[COMMUNITY_ADMIN].Householders.other = {read:true, delete:true}

data[COMMUNITY_ADMIN].InviteMembers = {}
data[COMMUNITY_ADMIN].InviteMembers[COMMUNITY_ADMIN] = {create:true, accept:true}
data[COMMUNITY_ADMIN].InviteMembers[COMMUNITY_ADMIN].own = {read:true, delete:true}
data[COMMUNITY_ADMIN].InviteMembers[COMMUNITY_ADMIN].other = {read:true}

data[COMMUNITY_ADMIN].InviteMembers[GUARD] = {create:true, accept:true}
data[COMMUNITY_ADMIN].InviteMembers[GUARD].own = {read:true, delete:true}
data[COMMUNITY_ADMIN].InviteMembers[GUARD].other = {read:true}

data[COMMUNITY_ADMIN].InviteMembers[RESIDENT] = {accept:true}

data[COMMUNITY_ADMIN].InviteMembers[RESIDENT_ADMIN] = {accept:true}

data[COMMUNITY_ADMIN].MemberInviteCodes = {}
data[COMMUNITY_ADMIN].MemberInviteCodes[COMMUNITY_ADMIN] = {create:true, verify:true}
data[COMMUNITY_ADMIN].MemberInviteCodes[COMMUNITY_ADMIN].own = {read:true, update:true, delete:true}

data[COMMUNITY_ADMIN].MemberInviteCodes[GUARD] = {create:true, verify:true}
data[COMMUNITY_ADMIN].MemberInviteCodes[GUARD].own = {read:true, update:true, delete:true}

data[COMMUNITY_ADMIN].MemberInviteCodes[RESIDENT] = {verify:true}

data[COMMUNITY_ADMIN].MemberInviteCodes[RESIDENT_ADMIN] = {verify:true}

data[COMMUNITY_ADMIN].Members = {}
data[COMMUNITY_ADMIN].Members[COMMUNITY_ADMIN] = {}
data[COMMUNITY_ADMIN].Members[COMMUNITY_ADMIN].own = {read:true, delete:true}
data[COMMUNITY_ADMIN].Members[COMMUNITY_ADMIN].other = {read:true}

data[COMMUNITY_ADMIN].Members[GUARD] = {}
data[COMMUNITY_ADMIN].Members[GUARD].own = {read:true}
data[COMMUNITY_ADMIN].Members[GUARD].other = {read:true, delete:true}

data[COMMUNITY_ADMIN].Members[RESIDENT] = {}
data[COMMUNITY_ADMIN].Members[RESIDENT].own = {read:true, delete:true}
data[COMMUNITY_ADMIN].Members[RESIDENT].other = {read:true, delete:true}

data[COMMUNITY_ADMIN].Members[RESIDENT_ADMIN] = {}
data[COMMUNITY_ADMIN].Members[RESIDENT_ADMIN].own = {read:true, delete:true}
data[COMMUNITY_ADMIN].Members[RESIDENT_ADMIN].other = {read:true, delete:true}

data[COMMUNITY_ADMIN].Packages = {}
data[COMMUNITY_ADMIN].Packages.other = {read:true}


// ==================== role:GUARD ====================

data[GUARD] = {}
data[GUARD].Announcements = {}
data[GUARD].Announcements.own = {read:true}
data[GUARD].Announcements.other = {read:true}

data[GUARD].Communities = {}
data[GUARD].Communities.own = {read:true}

data[GUARD].Householders = {}
data[GUARD].Householders.own = {read:true}

data[GUARD].InviteMembers = {}
data[GUARD].InviteMembers[GUARD] = {}
data[GUARD].InviteMembers[GUARD].own = {read:true}
data[GUARD].InviteMembers[GUARD].other = {read:true}

data[GUARD].Members = {}
data[GUARD].Members[COMMUNITY_ADMIN] = {}
data[GUARD].Members[COMMUNITY_ADMIN].own = {read:true}
data[GUARD].Members[COMMUNITY_ADMIN].other = {read:true}

data[GUARD].Members[GUARD] = {}
data[GUARD].Members[GUARD].own = {read:true}
data[GUARD].Members[GUARD].other = {read:true}

data[GUARD].Members[RESIDENT] = {}
data[GUARD].Members[RESIDENT].own = {read:true}
data[GUARD].Members[RESIDENT].other = {read:true}

data[GUARD].Members[RESIDENT_ADMIN] = {}
data[GUARD].Members[RESIDENT_ADMIN].own = {read:true}
data[GUARD].Members[RESIDENT_ADMIN].other = {read:true}

data[GUARD].PackageReceiveCodes = {verify:true}

data[GUARD].Packages = {create:true}
data[GUARD].Packages.own = {read:true, delete:true}
data[GUARD].Packages.other = {read:true}



// ==================== role:RESIDENT ====================

data[RESIDENT] = {}
data[RESIDENT].Announcements = {}
data[RESIDENT].Announcements.own = {read:true}
data[RESIDENT].Announcements.other = {read:true}

data[RESIDENT].Communities = {}
data[RESIDENT].Communities.own = {read:true}

data[RESIDENT].Householders = {}
data[RESIDENT].Householders.own = {read:true}

data[RESIDENT].InviteMembers = {}

data[RESIDENT].InviteMembers[RESIDENT] = {create:true}
data[RESIDENT].InviteMembers[RESIDENT].own = {read:true, delete:true}
data[RESIDENT].InviteMembers[RESIDENT].other = {read:true}

data[RESIDENT].InviteMembers[RESIDENT_ADMIN] = {}
data[RESIDENT].InviteMembers[RESIDENT_ADMIN].own = {read:true}
data[RESIDENT].InviteMembers[RESIDENT_ADMIN].other = {read:true}

data[RESIDENT].MemberInviteCodes = {}

data[RESIDENT].MemberInviteCodes[RESIDENT] = {create:true}
data[RESIDENT].MemberInviteCodes[RESIDENT].own = {read:true, update:true, delete:true}

data[RESIDENT].Members = {}
data[RESIDENT].Members[COMMUNITY_ADMIN] = {}
data[RESIDENT].Members[COMMUNITY_ADMIN].own = {read:true}
data[RESIDENT].Members[COMMUNITY_ADMIN].own = {other:true}

data[RESIDENT].Members[GUARD] = {}
data[RESIDENT].Members[GUARD].own = {read:true}
data[RESIDENT].Members[GUARD].own = {other:true}

data[RESIDENT].Members[RESIDENT] = {}
data[RESIDENT].Members[RESIDENT].own = {read:true, delete:true}
data[RESIDENT].Members[RESIDENT].other = {read:true}

data[RESIDENT].Members[RESIDENT_ADMIN] = {}
data[RESIDENT].Members[RESIDENT_ADMIN].own = {read:true}
data[RESIDENT].Members[RESIDENT_ADMIN].other = {read:true}

data[RESIDENT].PackageReceiveCodes = {}
data[RESIDENT].PackageReceiveCodes = {create:true}
data[RESIDENT].PackageReceiveCodes.own = {read:true, update:true, delete:true}

data[RESIDENT].Packages = {}
data[RESIDENT].Packages.own = {read:true}
data[RESIDENT].Packages.other = {read:true}


// ==================== role:RESIDENT_ADMIN ====================

data[RESIDENT_ADMIN] = {}
data[RESIDENT_ADMIN].Announcements = {}
data[RESIDENT_ADMIN].Announcements.own = {read:true}
data[RESIDENT_ADMIN].Announcements.other = {read:true}

data[RESIDENT_ADMIN].Communities = {}
data[RESIDENT_ADMIN].Communities.own = {read:true}

data[RESIDENT_ADMIN].Householders = {}
data[RESIDENT_ADMIN].Householders.own = {read:true}

data[RESIDENT_ADMIN].InviteMembers = {}

data[RESIDENT_ADMIN].InviteMembers[RESIDENT] = {}
data[RESIDENT_ADMIN].InviteMembers[RESIDENT] = {create:true}
data[RESIDENT_ADMIN].InviteMembers[RESIDENT].own = {read:true, delete:true}
data[RESIDENT_ADMIN].InviteMembers[RESIDENT].other = {read:true}

data[RESIDENT_ADMIN].InviteMembers[RESIDENT_ADMIN] = {}
data[RESIDENT_ADMIN].InviteMembers[RESIDENT_ADMIN] = {create:true}
data[RESIDENT_ADMIN].InviteMembers[RESIDENT_ADMIN].own = {read:true, delete:true}
data[RESIDENT_ADMIN].InviteMembers[RESIDENT_ADMIN].other = {read:true}

data[RESIDENT_ADMIN].MemberInviteCodes = {}

data[RESIDENT_ADMIN].MemberInviteCodes[RESIDENT] = {create:true}
data[RESIDENT_ADMIN].MemberInviteCodes[RESIDENT].own = {read:true, update:true, delete:true}

data[RESIDENT_ADMIN].MemberInviteCodes[RESIDENT_ADMIN] = {}
data[RESIDENT_ADMIN].MemberInviteCodes[RESIDENT_ADMIN] = {create:true}
data[RESIDENT_ADMIN].MemberInviteCodes[RESIDENT_ADMIN].own = {read:true, update:true, delete:true}

data[RESIDENT_ADMIN].Members = {}
data[RESIDENT_ADMIN].Members[COMMUNITY_ADMIN] = {}
data[RESIDENT_ADMIN].Members[COMMUNITY_ADMIN].own = {read:true}
data[RESIDENT_ADMIN].Members[COMMUNITY_ADMIN].other = {read:true}

data[RESIDENT_ADMIN].Members[GUARD] = {}
data[RESIDENT_ADMIN].Members[GUARD].own = {read:true}
data[RESIDENT_ADMIN].Members[GUARD].other = {read:true}

data[RESIDENT_ADMIN].Members[RESIDENT] = {}
data[RESIDENT_ADMIN].Members[RESIDENT].own = {read:true}
data[RESIDENT_ADMIN].Members[RESIDENT].other = {read:true, delete:true}

data[RESIDENT_ADMIN].Members[RESIDENT_ADMIN] = {}
data[RESIDENT_ADMIN].Members[RESIDENT_ADMIN].own = {read:true, delete:true}
data[RESIDENT_ADMIN].Members[RESIDENT_ADMIN].other = {read:true}

data[RESIDENT_ADMIN].PackageReceiveCodes = {}
data[RESIDENT_ADMIN].PackageReceiveCodes = {create:true}
data[RESIDENT_ADMIN].PackageReceiveCodes.own = {read:true, update:true, delete:true}

data[RESIDENT_ADMIN].Packages = {}
data[RESIDENT_ADMIN].Packages.own = {read:true}
data[RESIDENT_ADMIN].Packages.other = {read:true}

data[RESIDENT_ADMIN].HouseholderPermissions = {}
data[RESIDENT_ADMIN].HouseholderPermissions.own = {read:true, update:true}

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

data[USER].CommunityRequisitions = {create:true}
data[USER].CommunityRequisitions.own = {read:true, update:true, delete:true}

data[USER].HouseholderRequisitions = {create:true}
data[USER].HouseholderRequisitions.own = {read:true, delete:true}


data[USER].InviteMembers = {}
data[USER].InviteMembers[COMMUNITY_ADMIN] = {accept:true}
data[USER].InviteMembers[GUARD] = {accept:true}
data[USER].InviteMembers[RESIDENT] = {accept:true}
data[USER].InviteMembers[RESIDENT_ADMIN] = {accept:true}

data[USER].MemberInviteCodes = {}
data[USER].MemberInviteCodes[COMMUNITY_ADMIN] = {verify:true}
data[USER].MemberInviteCodes[GUARD] = {verify:true}
data[USER].MemberInviteCodes[RESIDENT] = {verify:true}
data[USER].MemberInviteCodes[RESIDENT_ADMIN] = {verify:true}

data[USER].Users = {}
data[USER].Users = {create:true}
data[USER].Users.own = {read:true, update:true, delete:true}
data[USER].Users.other = {read:true}



create(data);