/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package persistence;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;

/**
 *
 * @author francisco
 */
@Entity
@Table(name = "personal")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "PersonalPersistence.findAll", query = "SELECT p FROM PersonalPersistence p"),
    @NamedQuery(name = "PersonalPersistence.findByIdPersonal", query = "SELECT p FROM PersonalPersistence p WHERE p.idPersonal = :idPersonal"),
    @NamedQuery(name = "PersonalPersistence.findByLastName", query = "SELECT p FROM PersonalPersistence p WHERE p.lastName = :lastName"),
    @NamedQuery(name = "PersonalPersistence.findByName", query = "SELECT p FROM PersonalPersistence p WHERE p.name = :name"),
    @NamedQuery(name = "PersonalPersistence.findByAddress", query = "SELECT p FROM PersonalPersistence p WHERE p.address = :address"),
    @NamedQuery(name = "PersonalPersistence.findByCity", query = "SELECT p FROM PersonalPersistence p WHERE p.city = :city"),
    @NamedQuery(name = "PersonalPersistence.findByRegion", query = "SELECT p FROM PersonalPersistence p WHERE p.region = :region"),
    @NamedQuery(name = "PersonalPersistence.findByZip", query = "SELECT p FROM PersonalPersistence p WHERE p.zip = :zip"),
    @NamedQuery(name = "PersonalPersistence.findByCountry", query = "SELECT p FROM PersonalPersistence p WHERE p.country = :country"),
    @NamedQuery(name = "PersonalPersistence.findByDni", query = "SELECT p FROM PersonalPersistence p WHERE p.dni = :dni"),
    @NamedQuery(name = "PersonalPersistence.findByBirthdate", query = "SELECT p FROM PersonalPersistence p WHERE p.birthdate = :birthdate"),
    @NamedQuery(name = "PersonalPersistence.findByTel", query = "SELECT p FROM PersonalPersistence p WHERE p.tel = :tel"),
    @NamedQuery(name = "PersonalPersistence.findByCel", query = "SELECT p FROM PersonalPersistence p WHERE p.cel = :cel"),
    @NamedQuery(name = "PersonalPersistence.findByMail", query = "SELECT p FROM PersonalPersistence p WHERE p.mail = :mail"),
    @NamedQuery(name = "PersonalPersistence.findByUser", query = "SELECT p FROM PersonalPersistence p WHERE p.user = :user"),
    @NamedQuery(name = "PersonalPersistence.findByRole", query = "SELECT p FROM PersonalPersistence p WHERE p.role = :role"),
    @NamedQuery(name = "PersonalPersistence.findByStatus", query = "SELECT p FROM PersonalPersistence p WHERE p.status = :status"),
    @NamedQuery(name = "PersonalPersistence.findByLapso", query = "SELECT p FROM PersonalPersistence p WHERE p.lapso = :lapso")})
public class PersonalPersistence implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @Basic(optional = false)
    @Column(name = "id_personal")
    private Integer idPersonal;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "name")
    private String name;
    @Column(name = "address")
    private String address;
    @Column(name = "city")
    private String city;
    @Column(name = "region")
    private String region;
    @Column(name = "zip")
    private String zip;
    @Column(name = "country")
    private String country;
    @Column(name = "dni")
    private String dni;
    @Column(name = "birthdate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date birthdate;
    @Column(name = "tel")
    private String tel;
    @Column(name = "cel")
    private String cel;
    @Column(name = "mail")
    private String mail;
    @Column(name = "user")
    private String user;
    @Column(name = "role")
    private String role;
    @Column(name = "status")
    private String status;
    @Column(name = "lapso")
    private String lapso;

    public PersonalPersistence() {
    }

    public PersonalPersistence(Integer idPersonal) {
        this.idPersonal = idPersonal;
    }

    public Integer getIdPersonal() {
        return idPersonal;
    }

    public void setIdPersonal(Integer idPersonal) {
        this.idPersonal = idPersonal;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getZip() {
        return zip;
    }

    public void setZip(String zip) {
        this.zip = zip;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String getCel() {
        return cel;
    }

    public void setCel(String cel) {
        this.cel = cel;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getLapso() {
        return lapso;
    }

    public void setLapso(String lapso) {
        this.lapso = lapso;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idPersonal != null ? idPersonal.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof PersonalPersistence)) {
            return false;
        }
        PersonalPersistence other = (PersonalPersistence) object;
        if ((this.idPersonal == null && other.idPersonal != null) || (this.idPersonal != null && !this.idPersonal.equals(other.idPersonal))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "persistence.PersonalPersistence[ idPersonal=" + idPersonal + " ]";
    }
    
}
