import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('users')
export class User {
  @PrimaryColumn() id: string;
  @Column() name: string;
  @Column() email: string;
  @Column() cpf: string;
  @Column('float') balance: number;
  @Column('float') level: number;
  @Column('varchar', { array: true }) orders_ids: string[];
  @Column() instagram_email: string;
  @CreateDateColumn() created_at: Date;
  @UpdateDateColumn() updated_at: Date;
  @DeleteDateColumn() deleted_at: Date;

  constructor() {
    this.id = this.id || uuidv4(); 
  }
}