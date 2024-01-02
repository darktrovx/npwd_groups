

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

    if exports['devyn-groups']:GetGroupID() then
        appData.inGroup = true
    else
        appData.inGroup = false
    end

    appData.owner = LocalPlayer.state.owner or false

    appData.task = exports['devyn-groups']:GetTaskData()
    cb(appData)
end)

RegisterNUICallback('CreateGroup', function(_, cb)
    local success = exports['devyn-groups']:CreateGroup()
    cb(success)
end)

RegisterNUICallback('LeaveGroup', function(_, cb)
    local success = exports['devyn-groups']:LeaveGroup()
    cb(success)
end)

RegisterNUICallback("RequestGroups", function(_, cb)
    local groups = exports['devyn-groups']:RequestGroupsList()
    cb(groups)
end)

RegisterNUICallback('RequestJoin', function(data, cb)
    local success = exports['devyn-groups']:RequestJoin(data.id)
    cb(success)
end)

RegisterNUICallback("GetRequests", function(_, cb)
    local requests = exports['devyn-groups']:GetRequests()
    cb(requests)
end)

RegisterNUICallback("AcceptRequest", function(data, cb)
    local success = exports['devyn-groups']:AcceptRequest(data.id)
    cb(success)
end)

RegisterNUICallback("DenyRequest", function(data, cb)
    local success = exports['devyn-groups']:DenyRequest(data.id)
    cb(success)
end)

RegisterNUICallback("RequestMembers", function(_, cb)
    local members = exports['devyn-groups']:GetMembers()
    cb(members)
end)

RegisterNUICallback("KickMember", function(data, cb)
    local success = exports['devyn-groups']:KickMember(data.id)
    cb(success)
end)