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
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
@Table(name = "materialAeronautic")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "MaterialAeronauticPersistence.findAll", query = "SELECT m FROM MaterialAeronauticPersistence m"),
    @NamedQuery(name = "MaterialAeronauticPersistence.findByIdMaterial", query = "SELECT m FROM MaterialAeronauticPersistence m WHERE m.idMaterial = :idMaterial"),
    @NamedQuery(name = "MaterialAeronauticPersistence.findByBrand", query = "SELECT m FROM MaterialAeronauticPersistence m WHERE m.brand = :brand"),
    @NamedQuery(name = "MaterialAeronauticPersistence.findByNamePlane", query = "SELECT m FROM MaterialAeronauticPersistence m WHERE m.namePlane = :namePlane"),
    @NamedQuery(name = "MaterialAeronauticPersistence.findByYear", query = "SELECT m FROM MaterialAeronauticPersistence m WHERE m.year = :year"),
    @NamedQuery(name = "MaterialAeronauticPersistence.findByRegistration", query = "SELECT m FROM MaterialAeronauticPersistence m WHERE m.registration = :registration"),
    @NamedQuery(name = "MaterialAeronauticPersistence.findByRegistrationYear", query = "SELECT m FROM MaterialAeronauticPersistence m WHERE m.registrationYear = :registrationYear"),
    @NamedQuery(name = "MaterialAeronauticPersistence.findByWingspan", query = "SELECT m FROM MaterialAeronauticPersistence m WHERE m.wingspan = :wingspan"),
    @NamedQuery(name = "MaterialAeronauticPersistence.findByLongPlane", query = "SELECT m FROM MaterialAeronauticPersistence m WHERE m.longPlane = :longPlane"),
    @NamedQuery(name = "MaterialAeronauticPersistence.findByMaxTakeOff", query = "SELECT m FROM MaterialAeronauticPersistence m WHERE m.maxTakeOff = :maxTakeOff"),
    @NamedQuery(name = "MaterialAeronauticPersistence.findByEmptyWeight", query = "SELECT m FROM MaterialAeronauticPersistence m WHERE m.emptyWeight = :emptyWeight"),
    @NamedQuery(name = "MaterialAeronauticPersistence.findByCruiseSpeed", query = "SELECT m FROM MaterialAeronauticPersistence m WHERE m.cruiseSpeed = :cruiseSpeed"),
    @NamedQuery(name = "MaterialAeronauticPersistence.findByServiceCeiling", query = "SELECT m FROM MaterialAeronauticPersistence m WHERE m.serviceCeiling = :serviceCeiling"),
    @NamedQuery(name = "MaterialAeronauticPersistence.findByTakeoffRace", query = "SELECT m FROM MaterialAeronauticPersistence m WHERE m.takeoffRace = :takeoffRace"),
    @NamedQuery(name = "MaterialAeronauticPersistence.findByLandingRace", query = "SELECT m FROM MaterialAeronauticPersistence m WHERE m.landingRace = :landingRace"),
    @NamedQuery(name = "MaterialAeronauticPersistence.findByEngine", query = "SELECT m FROM MaterialAeronauticPersistence m WHERE m.engine = :engine"),
    @NamedQuery(name = "MaterialAeronauticPersistence.findByEnginePower", query = "SELECT m FROM MaterialAeronauticPersistence m WHERE m.enginePower = :enginePower"),
    @NamedQuery(name = "MaterialAeronauticPersistence.findByFuelCapacity", query = "SELECT m FROM MaterialAeronauticPersistence m WHERE m.fuelCapacity = :fuelCapacity"),
    @NamedQuery(name = "MaterialAeronauticPersistence.findByPropeller", query = "SELECT m FROM MaterialAeronauticPersistence m WHERE m.propeller = :propeller")})
public class MaterialAeronauticPersistence implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id_material")
    private Integer idMaterial;
    @Basic(optional = false)
    @Column(name = "brand")
    private String brand;
    @Basic(optional = false)
    @Column(name = "namePlane")
    private String namePlane;
    @Basic(optional = false)
    @Column(name = "year")
    @Temporal(TemporalType.TIMESTAMP)
    private Date year;
    @Basic(optional = false)
    @Column(name = "registration")
    private String registration;
    @Basic(optional = false)
    @Column(name = "registrationYear")
    @Temporal(TemporalType.TIMESTAMP)
    private Date registrationYear;
    @Basic(optional = false)
    @Column(name = "wingspan")
    private int wingspan;
    @Basic(optional = false)
    @Column(name = "longPlane")
    private int longPlane;
    @Basic(optional = false)
    @Column(name = "maxTakeOff")
    private int maxTakeOff;
    @Basic(optional = false)
    @Column(name = "emptyWeight")
    private int emptyWeight;
    @Basic(optional = false)
    @Column(name = "cruiseSpeed")
    private int cruiseSpeed;
    @Basic(optional = false)
    @Column(name = "serviceCeiling")
    private int serviceCeiling;
    @Basic(optional = false)
    @Column(name = "takeoffRace")
    private int takeoffRace;
    @Basic(optional = false)
    @Column(name = "landingRace")
    private int landingRace;
    @Basic(optional = false)
    @Column(name = "engine")
    private String engine;
    @Basic(optional = false)
    @Column(name = "enginePower")
    private int enginePower;
    @Basic(optional = false)
    @Column(name = "fuelCapacity")
    private int fuelCapacity;
    @Basic(optional = false)
    @Column(name = "propeller")
    private String propeller;

    public MaterialAeronauticPersistence() {
    }

    public MaterialAeronauticPersistence(Integer idMaterial) {
        this.idMaterial = idMaterial;
    }

    public MaterialAeronauticPersistence(Integer idMaterial, String brand, String namePlane, Date year, String registration, Date registrationYear, int wingspan, int longPlane, int maxTakeOff, int emptyWeight, int cruiseSpeed, int serviceCeiling, int takeoffRace, int landingRace, String engine, int enginePower, int fuelCapacity, String propeller) {
        this.idMaterial = idMaterial;
        this.brand = brand;
        this.namePlane = namePlane;
        this.year = year;
        this.registration = registration;
        this.registrationYear = registrationYear;
        this.wingspan = wingspan;
        this.longPlane = longPlane;
        this.maxTakeOff = maxTakeOff;
        this.emptyWeight = emptyWeight;
        this.cruiseSpeed = cruiseSpeed;
        this.serviceCeiling = serviceCeiling;
        this.takeoffRace = takeoffRace;
        this.landingRace = landingRace;
        this.engine = engine;
        this.enginePower = enginePower;
        this.fuelCapacity = fuelCapacity;
        this.propeller = propeller;
    }

    public Integer getIdMaterial() {
        return idMaterial;
    }

    public void setIdMaterial(Integer idMaterial) {
        this.idMaterial = idMaterial;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getNamePlane() {
        return namePlane;
    }

    public void setNamePlane(String namePlane) {
        this.namePlane = namePlane;
    }

    public Date getYear() {
        return year;
    }

    public void setYear(Date year) {
        this.year = year;
    }

    public String getRegistration() {
        return registration;
    }

    public void setRegistration(String registration) {
        this.registration = registration;
    }

    public Date getRegistrationYear() {
        return registrationYear;
    }

    public void setRegistrationYear(Date registrationYear) {
        this.registrationYear = registrationYear;
    }

    public int getWingspan() {
        return wingspan;
    }

    public void setWingspan(int wingspan) {
        this.wingspan = wingspan;
    }

    public int getLongPlane() {
        return longPlane;
    }

    public void setLongPlane(int longPlane) {
        this.longPlane = longPlane;
    }

    public int getMaxTakeOff() {
        return maxTakeOff;
    }

    public void setMaxTakeOff(int maxTakeOff) {
        this.maxTakeOff = maxTakeOff;
    }

    public int getEmptyWeight() {
        return emptyWeight;
    }

    public void setEmptyWeight(int emptyWeight) {
        this.emptyWeight = emptyWeight;
    }

    public int getCruiseSpeed() {
        return cruiseSpeed;
    }

    public void setCruiseSpeed(int cruiseSpeed) {
        this.cruiseSpeed = cruiseSpeed;
    }

    public int getServiceCeiling() {
        return serviceCeiling;
    }

    public void setServiceCeiling(int serviceCeiling) {
        this.serviceCeiling = serviceCeiling;
    }

    public int getTakeoffRace() {
        return takeoffRace;
    }

    public void setTakeoffRace(int takeoffRace) {
        this.takeoffRace = takeoffRace;
    }

    public int getLandingRace() {
        return landingRace;
    }

    public void setLandingRace(int landingRace) {
        this.landingRace = landingRace;
    }

    public String getEngine() {
        return engine;
    }

    public void setEngine(String engine) {
        this.engine = engine;
    }

    public int getEnginePower() {
        return enginePower;
    }

    public void setEnginePower(int enginePower) {
        this.enginePower = enginePower;
    }

    public int getFuelCapacity() {
        return fuelCapacity;
    }

    public void setFuelCapacity(int fuelCapacity) {
        this.fuelCapacity = fuelCapacity;
    }

    public String getPropeller() {
        return propeller;
    }

    public void setPropeller(String propeller) {
        this.propeller = propeller;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idMaterial != null ? idMaterial.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof MaterialAeronauticPersistence)) {
            return false;
        }
        MaterialAeronauticPersistence other = (MaterialAeronauticPersistence) object;
        if ((this.idMaterial == null && other.idMaterial != null) || (this.idMaterial != null && !this.idMaterial.equals(other.idMaterial))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "persistence.MaterialAeronauticPersistence[ idMaterial=" + idMaterial + " ]";
    }
    
}
