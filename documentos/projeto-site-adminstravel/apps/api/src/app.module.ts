import { Module } from '@nestjs/common';
import { StructuredLoggerService } from './common/logger/structured-logger.service';
import { AppointmentsModule } from './modules/appointments/appointments.module';
import { AuditModule } from './modules/audit/audit.module';
import { AuthModule } from './modules/auth/auth.module';
import { BusinessHoursModule } from './modules/business-hours/business-hours.module';
import { ConsentsModule } from './modules/consents/consents.module';
import { GalleryModule } from './modules/gallery/gallery.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { SeoModule } from './modules/seo/seo.module';
import { ServicesModule } from './modules/services/services.module';

@Module({
  imports: [
    AuthModule,
    ServicesModule,
    GalleryModule,
    ReviewsModule,
    AppointmentsModule,
    BusinessHoursModule,
    SeoModule,
    ConsentsModule,
    AuditModule
  ],
  providers: [StructuredLoggerService]
})
export class AppModule {}
