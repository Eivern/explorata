<?php

namespace App\Observers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class MultipleImageObserver
{
    /**
     * Handle the Model "updated" event.
     */
    public function updated(Model $model): void
    {
        if ($model->isDirty('images')) {
            $originalFiles = $model->getOriginal('images');
            $newFiles = $model->images;

            // Decode the original files if it's not casted in the model
            if (!is_array($originalFiles)) {
                $originalFiles = json_decode($originalFiles);
            }

            foreach ($originalFiles as $originalFile) {
                if (!in_array($originalFile, $newFiles)) {
                    Storage::disk(config('filament.default_filesystem_disk'))
                        ->delete($originalFile);
                }
            }
        }
    }

    /**
     * Handle the Model "deleted" event.
     */
    public function deleted(Model $model): void
    {
        if (!is_null($model->images)) {
            $files = $model->images;

            // Decode the files if it's not casted in the model
            if (!is_array($files)) {
                $files = json_decode($files);
            }

            foreach ($files as $file) {
                Storage::disk(config('filament.default_filesystem_disk'))
                    ->delete($file);
            }
        }
    }
}
