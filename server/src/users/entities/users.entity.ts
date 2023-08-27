import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
class UsersEntity {
  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS',
  })
  id: number;

  @Column()
  email: string;

  @CreateDateColumn({ type: 'timestamptz' })
  created_at: Date;
}

export default UsersEntity;
