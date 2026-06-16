import { Controller } from '@nestjs/common';
import { BusinessHoursService } from './business-hours.service';

@Controller('business-hours')
export class BusinessHoursController {
  constructor(private readonly business_hoursService: BusinessHoursService) {}
}
