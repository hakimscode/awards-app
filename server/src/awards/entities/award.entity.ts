import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('awards')
class AwardsEntity {
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  required_point: number;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;
}

export default AwardsEntity;
