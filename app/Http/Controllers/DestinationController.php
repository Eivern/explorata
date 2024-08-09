<?php

namespace App\Http\Controllers;

use App\Models\Destination;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DestinationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $destinations = Destination::all();
        return Inertia::render('Destinations', [
            'title' => "Destinations",
            'destinations' => $destinations
        ]);
    }

    /**
     * Bookmark destination.
     */
    public function bookmark(Destination $destination)
    {
        $user = Auth::user();
        if ($user) {
            $user->destinations()->attach($destination->id);
            return redirect()->route('destinations.detail', $destination->id)->with('message', 'Destination bookmarked successfully!');
        }
    }

    /**
     * Bookmark destination.
     */
    public function unbookmark(Destination $destination)
    {
        $user = Auth::user();
        if ($user) {
            $user->destinations()->detach($destination->id);
            return redirect()->route('destinations.detail', $destination->id)->with('message', 'Destination bookmarked successfully!');
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Destination $destination)
    {
        $user = Auth::user();
        $isBookmarked = false;
        if ($user) {
            $isBookmarked = $user->destinations->contains($destination->id);
        }

        return Inertia::render('DestinationDetail', [
            'destination' => $destination,
            'isLogin' => !!$user,
            'isBookmarked' => $isBookmarked,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Destination $destination)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Destination $destination)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Destination $destination)
    {
        //
    }
}
