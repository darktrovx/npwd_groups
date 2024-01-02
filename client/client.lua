

-- EVENTS

-- NUI CALLBACKS
RegisterNUICallback('CreateGroup', function(_, cb)
    local success = exports['devyn-groups']:RequestCreateGroup()
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

RegisterNUICallback('RequestJoin', function(_, cb)
    local success = exports['devyn-groups']:RequestJoin()
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

RegisterNUICallback("GetMembers", function(_, cb)
    local members = exports['devyn-groups']:GetMembers()
    cb(members)
end)

RegisterNUICallback("KickMember", function(data, cb)
    local success = exports['devyn-groups']:KickMember(data.id)
    cb(success)
end)