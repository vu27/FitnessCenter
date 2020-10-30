package com.csvu.FitnessCenter.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Member {
    @Id
    public int mem_id;
    public String mem_fname;
    public String mem_lname;
    public String mem_email;
    public boolean mem_is_active;
    public double mem_total_paid;
    public int tier_code;

    public int getMem_id() {
        return this.mem_id;
    }

    public void setMem_id(int mem_id) {
        this.mem_id = mem_id;
    }

    public String getMem_fname() {
        return this.mem_fname;
    }

    public void setMem_fname(String mem_fname) {
        this.mem_fname = mem_fname;
    }

    public String getMem_lname() {
        return this.mem_lname;
    }

    public void setMem_lname(String mem_lname) {
        this.mem_lname = mem_lname;
    }

    public String getMem_email() {
        return this.mem_email;
    }

    public void setMem_email(String mem_email) {
        this.mem_email = mem_email;
    }

    public boolean isMem_is_active() {
        return this.mem_is_active;
    }

    public boolean getMem_is_active() {
        return this.mem_is_active;
    }

    public void setMem_is_active(boolean mem_is_active) {
        this.mem_is_active = mem_is_active;
    }

    public double getMem_total_paid() {
        return this.mem_total_paid;
    }

    public void setMem_total_paid(double mem_total_paid) {
        this.mem_total_paid = mem_total_paid;
    }

    public int getTier_code() {
        return this.tier_code;
    }

    public void setTier_code(int tier_code) {
        this.tier_code = tier_code;
    }

    
}
