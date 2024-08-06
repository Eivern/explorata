<?php

namespace Database\Seeders;

use App\Models\Country;
use App\Models\State;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class CountryStateSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $countries  = json_decode(Storage::get('json/countriesStates.json'));
        $now        = now();
        $states     = [];

        foreach ($countries as $country) {
            if (!count($country->states)) {
                continue;
            }
            $countryData = Country::create([
                'name'          => $country->name,
                'iso'          => $country->iso2,
            ]);

            foreach ($country->states as $state) {
                $states[] = [
                    'country_id' => $countryData->id,
                    'name'       => $state->name,
                    'created_at' => $now,
                    'updated_at' => $now,
                ];
            }
        }

        State::insert($states);
    }
}
