<?php

namespace App\Filament\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StartAdminOverview extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            Stat::make('Unique views', '192.1k')
            ->description('32k increase')
            ->descriptionIcon('heroicon-m-arrow-trending-up')
            ->color('success')
            ->chart([7, 2, 10, 3, 15, 4, 17]),
        Stat::make('Bounce rate', '21%')
            ->description('7% increase')
            ->descriptionIcon('heroicon-m-arrow-trending-down')
            ->chart([7, 2, 10, 3, 15, 4, 17])
            ->color('danger'),
        Stat::make('Average time on page', '3:12')
             ->chart([7, 2, 10, 3, 15, 4, 17])
            ->description('3% increase')
            ->descriptionIcon('heroicon-m-arrow-trending-up')
            ->color('success'),
            
        ];
    }
}
