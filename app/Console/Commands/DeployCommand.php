<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class DeployCommand extends Command
{
    protected $signature = 'app:deploy';
    protected $description = 'Prepare application for deployment (cache config, routes, views, etc.)';

    public function handle(): int
    {
        $this->info('Starting deployment optimization...');

        // Czyści stare cache (opcjonalnie, ale polecane)
        Artisan::call('optimize:clear');
        $this->info('Cache cleared');

        // Cache config
        Artisan::call('config:cache');
        $this->info('Config cached');

        // Cache routes
        Artisan::call('route:cache');
        $this->info('Routes cached');

        // Cache views
        Artisan::call('view:cache');
        $this->info('Views cached');

        // Cache events (jeśli używasz)
        Artisan::call('event:cache');
        $this->info('Events cached');

        // Final optimize (Laravel bundle cache)
        Artisan::call('optimize');
        $this->info('Optimization complete');

        $this->info('Deployment finished successfully!');

        return self::SUCCESS;
    }
}
