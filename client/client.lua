

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
    local groups = exports['devyn-groups']:RequestGroups()
    cb(groups)
end)

RegisterNUICallback('JoinGroup', function(_, cb)
    local success = exports['devyn-groups']:RequestJoin()
    cb(success)
end)

RegisterNUICallback("GetRequests", function(_, cb)
    local requests = exports['devyn-groups']:GetRequests()
    cb(requests)
end)