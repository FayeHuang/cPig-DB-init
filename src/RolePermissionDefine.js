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
data[COMMUNITY_ADMIN].Announcement = {create:true}
data[COMMUNITY_ADMIN].Announcement.own = {read:true, update:true, delete:true}
data[COMMUNITY_ADMIN].Announcement.other = {read:true, update:true, delete:true}

data[COMMUNITY_ADMIN].Community = {}
data[COMMUNITY_ADMIN].Community.own = {read:true, update:true, delete:true}

data[COMMUNITY_ADMIN].CommunityPermission = {}
data[COMMUNITY_ADMIN].CommunityPermission[COMMUNITY_ADMIN] = {}
data[COMMUNITY_ADMIN].CommunityPermission[COMMUNITY_ADMIN].own = {read:true}
data[COMMUNITY_ADMIN].CommunityPermission[GUARD] = {}
data[COMMUNITY_ADMIN].CommunityPermission[GUARD].own = {read:true, update:true}
data[COMMUNITY_ADMIN].CommunityPermission[RESIDENT] = {}
data[COMMUNITY_ADMIN].CommunityPermission[RESIDENT].own = {read:true, update:true}
data[COMMUNITY_ADMIN].CommunityPermission[RESIDENT_ADMIN] = {}
data[COMMUNITY_ADMIN].CommunityPermission[RESIDENT_ADMIN].own = {read:true, update:true}

data[COMMUNITY_ADMIN].CommunityRequisition = {create:true}
data[COMMUNITY_ADMIN].CommunityRequisition.own = {read:true, update:true, delete:true}

data[COMMUNITY_ADMIN].HouseholdRequisition = {create:true, verify:true}
data[COMMUNITY_ADMIN].HouseholdRequisition.own = {read:true, delete:true}
data[COMMUNITY_ADMIN].HouseholdRequisition.other = {read:true, delete:true}

data[COMMUNITY_ADMIN].Household = {create:true}
data[COMMUNITY_ADMIN].Household.own = {read:true, delete:true}
data[COMMUNITY_ADMIN].Household.other = {read:true, delete:true}

data[COMMUNITY_ADMIN].InviteMember = {}
data[COMMUNITY_ADMIN].InviteMember[COMMUNITY_ADMIN] = {create:true, accept:true}
data[COMMUNITY_ADMIN].InviteMember[COMMUNITY_ADMIN].own = {read:true, delete:true}
data[COMMUNITY_ADMIN].InviteMember[COMMUNITY_ADMIN].other = {read:true}

data[COMMUNITY_ADMIN].InviteMember[GUARD] = {create:true, accept:true}
data[COMMUNITY_ADMIN].InviteMember[GUARD].own = {read:true, delete:true}
data[COMMUNITY_ADMIN].InviteMember[GUARD].other = {read:true}

data[COMMUNITY_ADMIN].InviteMember[RESIDENT] = {accept:true}

data[COMMUNITY_ADMIN].InviteMember[RESIDENT_ADMIN] = {accept:true}

data[COMMUNITY_ADMIN].MemberInviteCode = {}
data[COMMUNITY_ADMIN].MemberInviteCode[COMMUNITY_ADMIN] = {create:true, verify:true}
data[COMMUNITY_ADMIN].MemberInviteCode[COMMUNITY_ADMIN].own = {read:true, update:true, delete:true}

data[COMMUNITY_ADMIN].MemberInviteCode[GUARD] = {create:true, verify:true}
data[COMMUNITY_ADMIN].MemberInviteCode[GUARD].own = {read:true, update:true, delete:true}

data[COMMUNITY_ADMIN].MemberInviteCode[RESIDENT] = {verify:true}

data[COMMUNITY_ADMIN].MemberInviteCode[RESIDENT_ADMIN] = {verify:true}

data[COMMUNITY_ADMIN].Member = {}
data[COMMUNITY_ADMIN].Member[COMMUNITY_ADMIN] = {}
data[COMMUNITY_ADMIN].Member[COMMUNITY_ADMIN].own = {read:true, delete:true}
data[COMMUNITY_ADMIN].Member[COMMUNITY_ADMIN].other = {read:true}

data[COMMUNITY_ADMIN].Member[GUARD] = {}
data[COMMUNITY_ADMIN].Member[GUARD].own = {read:true}
data[COMMUNITY_ADMIN].Member[GUARD].other = {read:true, delete:true}

data[COMMUNITY_ADMIN].Member[RESIDENT] = {}
data[COMMUNITY_ADMIN].Member[RESIDENT].own = {read:true, delete:true}
data[COMMUNITY_ADMIN].Member[RESIDENT].other = {read:true, delete:true}

data[COMMUNITY_ADMIN].Member[RESIDENT_ADMIN] = {}
data[COMMUNITY_ADMIN].Member[RESIDENT_ADMIN].own = {read:true, delete:true}
data[COMMUNITY_ADMIN].Member[RESIDENT_ADMIN].other = {read:true, delete:true}

data[COMMUNITY_ADMIN].Package = {}
data[COMMUNITY_ADMIN].Package.other = {read:true}


// ==================== role:GUARD ====================

data[GUARD] = {}
data[GUARD].Announcement = {}
data[GUARD].Announcement.own = {read:true}
data[GUARD].Announcement.other = {read:true}

data[GUARD].Community = {}
data[GUARD].Community.own = {read:true}

data[GUARD].Household = {}
data[GUARD].Household.own = {read:true}

data[GUARD].InviteMember = {}
data[GUARD].InviteMember[GUARD] = {}
data[GUARD].InviteMember[GUARD].own = {read:true}
data[GUARD].InviteMember[GUARD].other = {read:true}

data[GUARD].Member = {}
data[GUARD].Member[COMMUNITY_ADMIN] = {}
data[GUARD].Member[COMMUNITY_ADMIN].own = {read:true}
data[GUARD].Member[COMMUNITY_ADMIN].other = {read:true}

data[GUARD].Member[GUARD] = {}
data[GUARD].Member[GUARD].own = {read:true}
data[GUARD].Member[GUARD].other = {read:true}

data[GUARD].Member[RESIDENT] = {}
data[GUARD].Member[RESIDENT].own = {read:true}
data[GUARD].Member[RESIDENT].other = {read:true}

data[GUARD].Member[RESIDENT_ADMIN] = {}
data[GUARD].Member[RESIDENT_ADMIN].own = {read:true}
data[GUARD].Member[RESIDENT_ADMIN].other = {read:true}

data[GUARD].PackageReceiveCode = {verify:true}

data[GUARD].Package = {create:true}
data[GUARD].Package.own = {read:true, delete:true}
data[GUARD].Package.other = {read:true, update:true, delete:true}



// ==================== role:RESIDENT ====================

data[RESIDENT] = {}
data[RESIDENT].Announcement = {}
data[RESIDENT].Announcement.own = {read:true}
data[RESIDENT].Announcement.other = {read:true}

data[RESIDENT].Community = {}
data[RESIDENT].Community.own = {read:true}

data[RESIDENT].Household = {}
data[RESIDENT].Household.own = {read:true}

data[RESIDENT].InviteMember = {}

data[RESIDENT].InviteMember[RESIDENT] = {create:true}
data[RESIDENT].InviteMember[RESIDENT].own = {read:true, delete:true}
data[RESIDENT].InviteMember[RESIDENT].other = {read:true}

data[RESIDENT].InviteMember[RESIDENT_ADMIN] = {}
data[RESIDENT].InviteMember[RESIDENT_ADMIN].own = {read:true}
data[RESIDENT].InviteMember[RESIDENT_ADMIN].other = {read:true}

data[RESIDENT].MemberInviteCode = {}

data[RESIDENT].MemberInviteCode[RESIDENT] = {create:true}
data[RESIDENT].MemberInviteCode[RESIDENT].own = {read:true, update:true, delete:true}

data[RESIDENT].Member = {}
data[RESIDENT].Member[COMMUNITY_ADMIN] = {}
data[RESIDENT].Member[COMMUNITY_ADMIN].own = {read:true}
data[RESIDENT].Member[COMMUNITY_ADMIN].own = {other:true}

data[RESIDENT].Member[GUARD] = {}
data[RESIDENT].Member[GUARD].own = {read:true}
data[RESIDENT].Member[GUARD].own = {other:true}

data[RESIDENT].Member[RESIDENT] = {}
data[RESIDENT].Member[RESIDENT].own = {read:true, delete:true}
data[RESIDENT].Member[RESIDENT].other = {read:true}

data[RESIDENT].Member[RESIDENT_ADMIN] = {}
data[RESIDENT].Member[RESIDENT_ADMIN].own = {read:true}
data[RESIDENT].Member[RESIDENT_ADMIN].other = {read:true}

data[RESIDENT].PackageReceiveCode = {}
data[RESIDENT].PackageReceiveCode = {create:true}
data[RESIDENT].PackageReceiveCode.own = {read:true, update:true, delete:true}

data[RESIDENT].Package = {}
data[RESIDENT].Package.own = {read:true}
data[RESIDENT].Package.other = {read:true}


// ==================== role:RESIDENT_ADMIN ====================

data[RESIDENT_ADMIN] = {}
data[RESIDENT_ADMIN].Announcement = {}
data[RESIDENT_ADMIN].Announcement.own = {read:true}
data[RESIDENT_ADMIN].Announcement.other = {read:true}

data[RESIDENT_ADMIN].Community = {}
data[RESIDENT_ADMIN].Community.own = {read:true}

data[RESIDENT_ADMIN].Household = {}
data[RESIDENT_ADMIN].Household.own = {read:true}

data[RESIDENT_ADMIN].InviteMember = {}

data[RESIDENT_ADMIN].InviteMember[RESIDENT] = {}
data[RESIDENT_ADMIN].InviteMember[RESIDENT] = {create:true}
data[RESIDENT_ADMIN].InviteMember[RESIDENT].own = {read:true, delete:true}
data[RESIDENT_ADMIN].InviteMember[RESIDENT].other = {read:true}

data[RESIDENT_ADMIN].InviteMember[RESIDENT_ADMIN] = {}
data[RESIDENT_ADMIN].InviteMember[RESIDENT_ADMIN] = {create:true}
data[RESIDENT_ADMIN].InviteMember[RESIDENT_ADMIN].own = {read:true, delete:true}
data[RESIDENT_ADMIN].InviteMember[RESIDENT_ADMIN].other = {read:true}

data[RESIDENT_ADMIN].MemberInviteCode = {}

data[RESIDENT_ADMIN].MemberInviteCode[RESIDENT] = {create:true}
data[RESIDENT_ADMIN].MemberInviteCode[RESIDENT].own = {read:true, update:true, delete:true}

data[RESIDENT_ADMIN].MemberInviteCode[RESIDENT_ADMIN] = {}
data[RESIDENT_ADMIN].MemberInviteCode[RESIDENT_ADMIN] = {create:true}
data[RESIDENT_ADMIN].MemberInviteCode[RESIDENT_ADMIN].own = {read:true, update:true, delete:true}

data[RESIDENT_ADMIN].Member = {}
data[RESIDENT_ADMIN].Member[COMMUNITY_ADMIN] = {}
data[RESIDENT_ADMIN].Member[COMMUNITY_ADMIN].own = {read:true}
data[RESIDENT_ADMIN].Member[COMMUNITY_ADMIN].other = {read:true}

data[RESIDENT_ADMIN].Member[GUARD] = {}
data[RESIDENT_ADMIN].Member[GUARD].own = {read:true}
data[RESIDENT_ADMIN].Member[GUARD].other = {read:true}

data[RESIDENT_ADMIN].Member[RESIDENT] = {}
data[RESIDENT_ADMIN].Member[RESIDENT].own = {read:true}
data[RESIDENT_ADMIN].Member[RESIDENT].other = {read:true, delete:true}

data[RESIDENT_ADMIN].Member[RESIDENT_ADMIN] = {}
data[RESIDENT_ADMIN].Member[RESIDENT_ADMIN].own = {read:true, delete:true}
data[RESIDENT_ADMIN].Member[RESIDENT_ADMIN].other = {read:true}

data[RESIDENT_ADMIN].PackageReceiveCode = {}
data[RESIDENT_ADMIN].PackageReceiveCode = {create:true}
data[RESIDENT_ADMIN].PackageReceiveCode.own = {read:true, update:true, delete:true}

data[RESIDENT_ADMIN].Package = {}
data[RESIDENT_ADMIN].Package.own = {read:true}
data[RESIDENT_ADMIN].Package.other = {read:true}

data[RESIDENT_ADMIN].HouseholdPermission = {}
data[RESIDENT_ADMIN].HouseholdPermission.own = {read:true, update:true}

// ==================== role:SYSTEM_ADMIN ====================

data[SYSTEM_ADMIN] = {}
data[SYSTEM_ADMIN].Announcement = {create:true}
data[SYSTEM_ADMIN].Announcement.own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].Announcement.other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].Community = {create:true}
data[SYSTEM_ADMIN].Community.own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].Community.other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].Invitation = {create:true}
data[SYSTEM_ADMIN].Invitation.own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].Invitation.other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].CommunityPermission = {}
data[SYSTEM_ADMIN].CommunityPermission[COMMUNITY_ADMIN] = {create:true}
data[SYSTEM_ADMIN].CommunityPermission[COMMUNITY_ADMIN].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].CommunityPermission[COMMUNITY_ADMIN].other = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].CommunityPermission[GUARD] = {create:true}
data[SYSTEM_ADMIN].CommunityPermission[GUARD].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].CommunityPermission[GUARD].other = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].CommunityPermission[RESIDENT] = {create:true}
data[SYSTEM_ADMIN].CommunityPermission[RESIDENT].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].CommunityPermission[RESIDENT].other = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].CommunityPermission[RESIDENT_ADMIN] = {create:true}
data[SYSTEM_ADMIN].CommunityPermission[RESIDENT_ADMIN].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].CommunityPermission[RESIDENT_ADMIN].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].CommunityRequisition = {create:true, verify:true}
data[SYSTEM_ADMIN].CommunityRequisition.own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].CommunityRequisition.other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].HouseholdRequisition = {create:true, verify:true}
data[SYSTEM_ADMIN].HouseholdRequisition.own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].HouseholdRequisition.other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].Household = {create:true}
data[SYSTEM_ADMIN].Household.own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].Household.other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].InviteMember = {}
data[SYSTEM_ADMIN].InviteMember[COMMUNITY_ADMIN] = {}
data[SYSTEM_ADMIN].InviteMember[COMMUNITY_ADMIN] = {create:true, accept:true}
data[SYSTEM_ADMIN].InviteMember[COMMUNITY_ADMIN].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].InviteMember[COMMUNITY_ADMIN].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].InviteMember[GUARD] = {}
data[SYSTEM_ADMIN].InviteMember[GUARD] = {create:true, accept:true}
data[SYSTEM_ADMIN].InviteMember[GUARD].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].InviteMember[GUARD].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].InviteMember[RESIDENT] = {}
data[SYSTEM_ADMIN].InviteMember[RESIDENT] = {create:true, accept:true}
data[SYSTEM_ADMIN].InviteMember[RESIDENT].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].InviteMember[RESIDENT].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].InviteMember[RESIDENT_ADMIN] = {}
data[SYSTEM_ADMIN].InviteMember[RESIDENT_ADMIN] = {create:true, accept:true}
data[SYSTEM_ADMIN].InviteMember[RESIDENT_ADMIN].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].InviteMember[RESIDENT_ADMIN].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].MemberInviteCode = {}
data[SYSTEM_ADMIN].MemberInviteCode[COMMUNITY_ADMIN] = {}
data[SYSTEM_ADMIN].MemberInviteCode[COMMUNITY_ADMIN] = {create:true, verify:true}
data[SYSTEM_ADMIN].MemberInviteCode[COMMUNITY_ADMIN].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].MemberInviteCode[COMMUNITY_ADMIN].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].MemberInviteCode[GUARD] = {}
data[SYSTEM_ADMIN].MemberInviteCode[GUARD] = {create:true, verify:true}
data[SYSTEM_ADMIN].MemberInviteCode[GUARD].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].MemberInviteCode[GUARD].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].MemberInviteCode[RESIDENT] = {}
data[SYSTEM_ADMIN].MemberInviteCode[RESIDENT] = {create:true, verify:true}
data[SYSTEM_ADMIN].MemberInviteCode[RESIDENT].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].MemberInviteCode[RESIDENT].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].MemberInviteCode[RESIDENT_ADMIN] = {}
data[SYSTEM_ADMIN].MemberInviteCode[RESIDENT_ADMIN] = {create:true, verify:true}
data[SYSTEM_ADMIN].MemberInviteCode[RESIDENT_ADMIN].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].MemberInviteCode[RESIDENT_ADMIN].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].Member = {}
data[SYSTEM_ADMIN].Member[COMMUNITY_ADMIN] = {}
data[SYSTEM_ADMIN].Member[COMMUNITY_ADMIN] = {create:true}
data[SYSTEM_ADMIN].Member[COMMUNITY_ADMIN].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].Member[COMMUNITY_ADMIN].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].Member[GUARD] = {}
data[SYSTEM_ADMIN].Member[GUARD] = {create:true}
data[SYSTEM_ADMIN].Member[GUARD].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].Member[GUARD].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].Member[RESIDENT] = {}
data[SYSTEM_ADMIN].Member[RESIDENT] = {create:true}
data[SYSTEM_ADMIN].Member[RESIDENT].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].Member[RESIDENT].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].Member[RESIDENT_ADMIN] = {}
data[SYSTEM_ADMIN].Member[RESIDENT_ADMIN] = {create:true}
data[SYSTEM_ADMIN].Member[RESIDENT_ADMIN].own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].Member[RESIDENT_ADMIN].other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].PackageReceiveCode = {}
data[SYSTEM_ADMIN].PackageReceiveCode = {create:true, verify:true}
data[SYSTEM_ADMIN].PackageReceiveCode.own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].PackageReceiveCode.other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].Package = {}
data[SYSTEM_ADMIN].Package = {create:true}
data[SYSTEM_ADMIN].Package.own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].Package.other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].SystemAdmin = {}
data[SYSTEM_ADMIN].SystemAdmin = {create:true}
data[SYSTEM_ADMIN].SystemAdmin.own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].SystemAdmin.other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].User = {}
data[SYSTEM_ADMIN].User = {create:true}
data[SYSTEM_ADMIN].User.own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].User.other = {read:true, update:true, delete:true}

data[SYSTEM_ADMIN].HouseholdPermission = {}
data[SYSTEM_ADMIN].HouseholdPermission = {create:true}
data[SYSTEM_ADMIN].HouseholdPermission.own = {read:true, update:true, delete:true}
data[SYSTEM_ADMIN].HouseholdPermission.other = {read:true, update:true, delete:true}

// ==================== role:USER ====================

data[USER] = {}

data[USER].Community = {}
data[USER].Community.own = {read:true}

data[USER].CommunityRequisition = {create:true}
data[USER].CommunityRequisition.own = {read:true, update:true, delete:true}

data[USER].HouseholdRequisition = {create:true}
data[USER].HouseholdRequisition.own = {read:true, delete:true}

data[USER].Invitation = {}
data[USER].Invitation.own = {read:true, delete:true, accept:true}

data[USER].MemberInviteCode = {}
data[USER].MemberInviteCode[COMMUNITY_ADMIN] = {verify:true}
data[USER].MemberInviteCode[GUARD] = {verify:true}
data[USER].MemberInviteCode[RESIDENT] = {verify:true}
data[USER].MemberInviteCode[RESIDENT_ADMIN] = {verify:true}

data[USER].User = {}
data[USER].User = {create:true}
data[USER].User.own = {read:true, update:true, delete:true}
data[USER].User.other = {read:true}



create(data);