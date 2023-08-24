const getMaxCapacityFromVehicles = function (vehicles) {
    let maxCapacity = 0;
    for (let i = 0; i < vehicles.length; i++) {
        const vehicle = vehicles[i];
        console.log('maxcapacity' + maxCapacity);
        console.log('i ' + i);
        console.log('vehicle.capacity'+ vehicle.capacity);
        if (vehicle.capacity > maxCapacity) {
            maxCapacity = vehicle.capacity;
        }
        
    }
    return maxCapacity;
};
    const vehicles = [
        {
            model: 'Seat Ibiza',
            capacity: 5,
            favorite: false,
        },
        {
            model: 'Mercedes Vito',
            capacity: 8,
            favorite: false,
        },
        {
            model: 'Kawasaki Ninja',
            capacity: 2,
            favorite: true,
        },
    ];
    let person = {
        name: 'Jordi',
    };
const maxCapacity = getMaxCapacityFromVehicles(vehicles);

console.log(`En mis vehiculos tengo la capacidad máxima de: ${maxCapacity}`);
