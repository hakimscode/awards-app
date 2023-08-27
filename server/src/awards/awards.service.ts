import { Injectable } from '@nestjs/common';
import { FindAllDto } from './dto/find-all.dto';
import { DataSource } from 'typeorm';
import AwardsEntity from './entities/award.entity';

@Injectable()
export class AwardsService {
  constructor(private readonly dataSource: DataSource) {}

  findAll(findAllDto: FindAllDto) {
    const { offset, limit, queryRequiredPoint, queryType } = findAllDto;

    let where = '';
    const whereParams = {};

    if (queryRequiredPoint !== undefined) {
      where += 'required_point >= :requiredPoint';
      whereParams['requiredPoint'] = queryRequiredPoint;
    }

    if (queryType !== undefined) {
      if (queryType.length) {
        where += ' and (';
      }
      for (let i = 0; i < queryType.length; i++) {
        if (i == 0) {
          where += `type = :type_${i}`;
          whereParams[`type_${i}`] = queryType[i];
        } else {
          where += ` OR type = :type_${i}`;
          whereParams[`type_${i}`] = queryType[i];
        }
      }
      if (queryType.length) {
        where += ')';
      }
    }

    const result = this.dataSource
      .getRepository(AwardsEntity)
      .createQueryBuilder('awards')
      .where(where, whereParams)
      .offset(offset)
      .limit(limit)
      .getMany();

    return result;
  }
}
