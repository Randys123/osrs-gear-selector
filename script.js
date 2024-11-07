const gearOptions = {
    helmet: [
        { name: 'Helm of Neitiznot', id: 'helm_neitiznot' },
        { name: 'Armadyl Helmet', id: 'armadyl_helmet' },
        { name: 'Void Knight Helm', id: 'void_knight_helm' }
    ],
    chest: [
        { name: 'Karil\'s Chestplate', id: 'karils_chest' },
        { name: 'Armadyl Chestplate', id: 'armadyl_chest' },
        { name: 'Bandos Chestplate', id: 'bandos_chest' }
    ],
    legs: [
        { name: 'Karil\'s Skirt', id: 'karils_skirt' },
        { name: 'Armadyl Chainskirt', id: 'armadyl_chainskirt' },
        { name: 'Bandos Tassets', id: 'bandos_tassets' }
    ],
    weapon: [
        { name: 'Abyssal Whip', id: 'abyssal_whip' },
        { name: 'Dragon Scimitar', id: 'dragon_scimitar' },
        { name: 'Armadyl Godsword', id: 'armadyl_godsword' }
    ],
    shield: [
        { name: 'Dragonfire Shield', id: 'dragonfire_shield' },
        { name: 'Armadyl Shield', id: 'armadyl_shield' },
        { name: 'Berserker Shield', id: 'berserker_shield' }
    ]
};

function updateGearOptions() {
    const selectedSlot = document.getElementById('slot').value;
    const gearItemSelect = document.getElementById('gear-item');
    const selectedGearInfo = document.getElementById('gear-info');

    // Clear current gear options
    gearItemSelect.innerHTML = '';

    // Get available gear options for the selected slot
    const gearList = gearOptions[selectedSlot];
    
    gearList.forEach(gear => {
        const option = document.createElement('option');
        option.value = gear.id;
        option.textContent = gear.name;
        gearItemSelect.appendChild(option);
    });

    // Add event listener for showing selected gear info
    gearItemSelect.onchange = () => {
        const selectedGear = gearItemSelect.options[gearItemSelect.selectedIndex].textContent;
        selectedGearInfo.textContent = `You selected: ${selectedGear}`;
    };
}
