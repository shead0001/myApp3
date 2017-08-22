import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MyApp3RegionMySuffixModule } from './region/region-my-suffix.module';
import { MyApp3CountryMySuffixModule } from './country/country-my-suffix.module';
import { MyApp3LocationMySuffixModule } from './location/location-my-suffix.module';
import { MyApp3DepartmentMySuffixModule } from './department/department-my-suffix.module';
import { MyApp3TaskMySuffixModule } from './task/task-my-suffix.module';
import { MyApp3EmployeeMySuffixModule } from './employee/employee-my-suffix.module';
import { MyApp3JobMySuffixModule } from './job/job-my-suffix.module';
import { MyApp3JobHistoryMySuffixModule } from './job-history/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        MyApp3RegionMySuffixModule,
        MyApp3CountryMySuffixModule,
        MyApp3LocationMySuffixModule,
        MyApp3DepartmentMySuffixModule,
        MyApp3TaskMySuffixModule,
        MyApp3EmployeeMySuffixModule,
        MyApp3JobMySuffixModule,
        MyApp3JobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyApp3EntityModule {}
