export class AsteroidController {

    static async getAsteroids() {
        const response = await fetch("https://neows-proxy.vercel.app/api/asteroids");
        const data = await response.json();

        const today = new Date().toISOString().split('T')[0];

        return data.near_earth_objects[today].map(AsteroidController.mapAsteroid);
    }

    static mapAsteroid(asteroid) {
        return {
            name: asteroid.name,
            id: asteroid.id,
            isDanger: asteroid.is_potentially_hazardous_asteroid,
            distance: asteroid.close_approach_data?.[0]?.miss_distance?.kilometers || null,
            diameter: (asteroid.estimated_diameter.meters.estimated_diameter_max + asteroid.estimated_diameter.meters.estimated_diameter_min) / 2,
            date: asteroid.close_approach_data?.[0]?.close_approach_date || null
        };
    }

    static async getAsteroidById(id) {
        const response = await fetch(`https://neows-proxy.vercel.app/api/asteroids/${id}`);
        const data = await response.json();

        return AsteroidController.mapAsteroidById(data);
    }

    static mapAsteroidById(asteroid) {
        return {
            id: asteroid.id,
            name: asteroid.name,
            isDanger: asteroid.is_potentially_hazardous_asteroid,
            diameter: (asteroid.estimated_diameter.meters.estimated_diameter_max + asteroid.estimated_diameter.meters.estimated_diameter_min) / 2,
            approaches: asteroid.close_approach_data
        };
    }
}