

-- EVENTS
RegisterNetEvent("groups:SendTaskUpdate", function(steps, step)
    exports.npwd:sendUIMessage({ app = "npwd_groups", method = "updateTask", data = { steps = steps, step = step} })
end)

RegisterNetEvent("groups:GroupJoinEvent", function()
    exports.npwd:sendUIMessage({ app = "npwd_groups", method = "groupJoined", data = { something = false } })
end)

RegisterNetEvent("groups:GroupMembersUpdate", function(members)
    exports.npwd:sendUIMessage({ app = "npwd_groups", method = "updateMembers", data = { members = members } })
end)

-- NUI CALLBACKS

RegisterNUICallback('RequestAppData', function(_, cb)
    local appData = {}

    if exports['groups']:GetGroupID() then
        appData.inGroup = true
    else
        appData.inGroup = false
    end

    appData.owner = LocalPlayer.state.owner or false

    appData.task = exports['groups']:GetTaskData()
    cb(appData)
end)

RegisterNUICallback('CreateGroup', function(_, cb)
    local success = exports['groups']:CreateGroup()
    cb(success)
end)

RegisterNUICallback('LeaveGroup', function(_, cb)
    local success = exports['groups']:LeaveGroup()
    cb(success)
end)

RegisterNUICallback("RequestGroups", function(_, cb)
    local groups = exports['groups']:RequestGroupsList()
    cb(groups)
end)

RegisterNUICallback('RequestJoin', function(data, cb)
    local success = exports['groups']:RequestJoin(data.id)
    cb(success)
end)

RegisterNUICallback("GetRequests", function(_, cb)
    local requests = exports['groups']:GetRequests()
    cb(requests)
end)

RegisterNUICallback("AcceptRequest", function(data, cb)
    local success = exports['groups']:AcceptRequest(data.id)
    cb(success)
end)

RegisterNUICallback("DenyRequest", function(data, cb)
    local success = exports['groups']:DenyRequest(data.id)
    cb(success)
end)

RegisterNUICallback("RequestMembers", function(_, cb)
    local members = exports['groups']:GetMembers()
    cb(members)
end)

RegisterNUICallback("KickMember", function(data, cb)
    local success = exports['groups']:KickMember(data.id)
    cb(success)
end)