RegisterNetEvent("defcon:setLevel")
AddEventHandler("defcon:setLevel", function (level)
  SendNUIMessage({
    ["action"] = "setLevel",
    ["image"] = Config.Levels[level].image
  })
end)

TriggerServerEvent("defcon:onClientResourceStart")