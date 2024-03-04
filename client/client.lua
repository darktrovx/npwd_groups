

-- EVENTS
RegisterNetEvent("groups:SendTaskUpdate", function(steps, step)
    exports.npwd:sendNPWDMessage('npwd_groups', 'updateTask', { steps = steps, step = step })
end)

RegisterNetEvent("groups:GroupDeleteEvent", function(groupID)
    exports.npwd:sendNPWDMessage('npwd_groups', 'groupDeleted', { groupID = groupID })
end)

RegisterNetEvent("groups:GroupJoinEvent", function()
    exports.npwd:sendNPWDMessage('npwd_groups', 'groupJoined', { something = false })
end)

RegisterNetEvent("groups:GroupMembersUpdate", function(members)
    exports.npwd:sendNPWDMessage('npwd_groups', 'updateMembers', { members = members })
end)

RegisterNetEvent("groups:GroupLeaveEvent", function()
    exports.npwd:sendNPWDMessage('npwd_groups', 'leftGroup', { something = false })
end)

-- NUI CALLBACKS

RegisterNUICallback('RequestAppData', function(_, cb)
    local appData = {}

    if exports.groups:GetGroupID() then
        appData.inGroup = true
    else
        appData.inGroup = false
    end

    appData.isOwner = exports.groups:IsOwner()

    appData.task = exports.groups:GetTaskData()
    cb(appData)
end)

RegisterNUICallback('CreateGroup', function(_, cb)
    local success = exports.groups:CreateGroup()
    cb(success)
end)

RegisterNUICallback('LeaveGroup', function(_, cb)
    local success = exports.groups:LeaveGroup()
    cb(success)
end)

RegisterNUICallback("RequestGroups", function(_, cb)
    local groups = exports.groups:RequestGroupsList()
    cb(groups)
end)

RegisterNUICallback('RequestJoin', function(data, cb)
    local success = exports.groups:RequestJoin(data.id)
    cb(success)
end)

RegisterNUICallback("GetRequests", function(_, cb)
    local requests = exports.groups:GetRequests()
    cb(requests)
end)

RegisterNUICallback("AcceptRequest", function(data, cb)
    local success = exports.groups:AcceptRequest(data.id)
    cb(success)
end)

RegisterNUICallback("DenyRequest", function(data, cb)
    local success = exports.groups:DenyRequest(data.id)
    cb(success)
end)

RegisterNUICallback("RequestMembers", function(_, cb)
    local members = exports.groups:GetMembers()
    cb(members)
end)

RegisterNUICallback("KickMember", function(data, cb)
    local success = exports.groups:Kick(data.id)
    cb(success)
end)