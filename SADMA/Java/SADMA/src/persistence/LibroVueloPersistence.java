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
@Table(name = "libroVuelo")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "LibroVueloPersistence.findAll", query = "SELECT l FROM LibroVueloPersistence l"),
    @NamedQuery(name = "LibroVueloPersistence.findByIdLibro", query = "SELECT l FROM LibroVueloPersistence l WHERE l.idLibro = :idLibro"),
    @NamedQuery(name = "LibroVueloPersistence.findByIdPersonal", query = "SELECT l FROM LibroVueloPersistence l WHERE l.idPersonal = :idPersonal"),
    @NamedQuery(name = "LibroVueloPersistence.findByIdMaterial", query = "SELECT l FROM LibroVueloPersistence l WHERE l.idMaterial = :idMaterial"),
    @NamedQuery(name = "LibroVueloPersistence.findByDates", query = "SELECT l FROM LibroVueloPersistence l WHERE l.dates = :dates"),
    @NamedQuery(name = "LibroVueloPersistence.findByFlightType", query = "SELECT l FROM LibroVueloPersistence l WHERE l.flightType = :flightType"),
    @NamedQuery(name = "LibroVueloPersistence.findByDepartureTime", query = "SELECT l FROM LibroVueloPersistence l WHERE l.departureTime = :departureTime"),
    @NamedQuery(name = "LibroVueloPersistence.findByAfrom", query = "SELECT l FROM LibroVueloPersistence l WHERE l.afrom = :afrom"),
    @NamedQuery(name = "LibroVueloPersistence.findByAto", query = "SELECT l FROM LibroVueloPersistence l WHERE l.ato = :ato"),
    @NamedQuery(name = "LibroVueloPersistence.findByArrivalTime", query = "SELECT l FROM LibroVueloPersistence l WHERE l.arrivalTime = :arrivalTime"),
    @NamedQuery(name = "LibroVueloPersistence.findByAirport", query = "SELECT l FROM LibroVueloPersistence l WHERE l.airport = :airport"),
    @NamedQuery(name = "LibroVueloPersistence.findByPilot", query = "SELECT l FROM LibroVueloPersistence l WHERE l.pilot = :pilot"),
    @NamedQuery(name = "LibroVueloPersistence.findByCoPilot", query = "SELECT l FROM LibroVueloPersistence l WHERE l.coPilot = :coPilot"),
    @NamedQuery(name = "LibroVueloPersistence.findByAirportDay", query = "SELECT l FROM LibroVueloPersistence l WHERE l.airportDay = :airportDay"),
    @NamedQuery(name = "LibroVueloPersistence.findByAirportNight", query = "SELECT l FROM LibroVueloPersistence l WHERE l.airportNight = :airportNight"),
    @NamedQuery(name = "LibroVueloPersistence.findByCrossingDay", query = "SELECT l FROM LibroVueloPersistence l WHERE l.crossingDay = :crossingDay"),
    @NamedQuery(name = "LibroVueloPersistence.findByCrossingNight", query = "SELECT l FROM LibroVueloPersistence l WHERE l.crossingNight = :crossingNight"),
    @NamedQuery(name = "LibroVueloPersistence.findByLanding", query = "SELECT l FROM LibroVueloPersistence l WHERE l.landing = :landing"),
    @NamedQuery(name = "LibroVueloPersistence.findByMultiMotor", query = "SELECT l FROM LibroVueloPersistence l WHERE l.multiMotor = :multiMotor"),
    @NamedQuery(name = "LibroVueloPersistence.findByReactor", query = "SELECT l FROM LibroVueloPersistence l WHERE l.reactor = :reactor"),
    @NamedQuery(name = "LibroVueloPersistence.findByTurboPropeller", query = "SELECT l FROM LibroVueloPersistence l WHERE l.turboPropeller = :turboPropeller"),
    @NamedQuery(name = "LibroVueloPersistence.findByArialAplication", query = "SELECT l FROM LibroVueloPersistence l WHERE l.arialAplication = :arialAplication"),
    @NamedQuery(name = "LibroVueloPersistence.findByAreal", query = "SELECT l FROM LibroVueloPersistence l WHERE l.areal = :areal")})
public class LibroVueloPersistence implements Serializable {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "id_libro")
    private Integer idLibro;
    @Column(name = "id_personal")
    private Integer idPersonal;
    @Column(name = "id_material")
    private Integer idMaterial;
    @Basic(optional = false)
    @Column(name = "dates")
    @Temporal(TemporalType.TIMESTAMP)
    private Date dates;
    @Basic(optional = false)
    @Column(name = "FLIGHT_TYPE")
    private String flightType;
    @Basic(optional = false)
    @Column(name = "DEPARTURE_TIME")
    @Temporal(TemporalType.TIME)
    private Date departureTime;
    @Basic(optional = false)
    @Column(name = "AFROM")
    private String afrom;
    @Basic(optional = false)
    @Column(name = "ATO")
    private String ato;
    @Basic(optional = false)
    @Column(name = "ARRIVAL_TIME")
    @Temporal(TemporalType.TIMESTAMP)
    private Date arrivalTime;
    @Basic(optional = false)
    @Column(name = "airport")
    private String airport;
    @Basic(optional = false)
    @Column(name = "pilot")
    @Temporal(TemporalType.TIME)
    private Date pilot;
    @Basic(optional = false)
    @Column(name = "co_pilot")
    @Temporal(TemporalType.TIME)
    private Date coPilot;
    @Basic(optional = false)
    @Column(name = "airport_day")
    @Temporal(TemporalType.TIME)
    private Date airportDay;
    @Basic(optional = false)
    @Column(name = "airport_night")
    @Temporal(TemporalType.TIME)
    private Date airportNight;
    @Basic(optional = false)
    @Column(name = "crossing_day")
    @Temporal(TemporalType.TIME)
    private Date crossingDay;
    @Basic(optional = false)
    @Column(name = "crossing_night")
    @Temporal(TemporalType.TIME)
    private Date crossingNight;
    @Basic(optional = false)
    @Column(name = "landing")
    private int landing;
    @Basic(optional = false)
    @Column(name = "multi_motor")
    @Temporal(TemporalType.TIME)
    private Date multiMotor;
    @Basic(optional = false)
    @Column(name = "reactor")
    @Temporal(TemporalType.TIME)
    private Date reactor;
    @Basic(optional = false)
    @Column(name = "turbo_propeller")
    @Temporal(TemporalType.TIME)
    private Date turboPropeller;
    @Basic(optional = false)
    @Column(name = "arial_aplication")
    @Temporal(TemporalType.TIME)
    private Date arialAplication;
    @Basic(optional = false)
    @Column(name = "Areal")
    @Temporal(TemporalType.TIME)
    private Date areal;

    public LibroVueloPersistence() {
    }

    public LibroVueloPersistence(Integer idLibro) {
        this.idLibro = idLibro;
    }

    public LibroVueloPersistence(Integer idLibro, Date dates, String flightType, Date departureTime, String afrom, String ato, Date arrivalTime, String airport, Date pilot, Date coPilot, Date airportDay, Date airportNight, Date crossingDay, Date crossingNight, int landing, Date multiMotor, Date reactor, Date turboPropeller, Date arialAplication, Date areal) {
        this.idLibro = idLibro;
        this.dates = dates;
        this.flightType = flightType;
        this.departureTime = departureTime;
        this.afrom = afrom;
        this.ato = ato;
        this.arrivalTime = arrivalTime;
        this.airport = airport;
        this.pilot = pilot;
        this.coPilot = coPilot;
        this.airportDay = airportDay;
        this.airportNight = airportNight;
        this.crossingDay = crossingDay;
        this.crossingNight = crossingNight;
        this.landing = landing;
        this.multiMotor = multiMotor;
        this.reactor = reactor;
        this.turboPropeller = turboPropeller;
        this.arialAplication = arialAplication;
        this.areal = areal;
    }

    public Integer getIdLibro() {
        return idLibro;
    }

    public void setIdLibro(Integer idLibro) {
        this.idLibro = idLibro;
    }

    public Integer getIdPersonal() {
        return idPersonal;
    }

    public void setIdPersonal(Integer idPersonal) {
        this.idPersonal = idPersonal;
    }

    public Integer getIdMaterial() {
        return idMaterial;
    }

    public void setIdMaterial(Integer idMaterial) {
        this.idMaterial = idMaterial;
    }

    public Date getDates() {
        return dates;
    }

    public void setDates(Date dates) {
        this.dates = dates;
    }

    public String getFlightType() {
        return flightType;
    }

    public void setFlightType(String flightType) {
        this.flightType = flightType;
    }

    public Date getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(Date departureTime) {
        this.departureTime = departureTime;
    }

    public String getAfrom() {
        return afrom;
    }

    public void setAfrom(String afrom) {
        this.afrom = afrom;
    }

    public String getAto() {
        return ato;
    }

    public void setAto(String ato) {
        this.ato = ato;
    }

    public Date getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(Date arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public String getAirport() {
        return airport;
    }

    public void setAirport(String airport) {
        this.airport = airport;
    }

    public Date getPilot() {
        return pilot;
    }

    public void setPilot(Date pilot) {
        this.pilot = pilot;
    }

    public Date getCoPilot() {
        return coPilot;
    }

    public void setCoPilot(Date coPilot) {
        this.coPilot = coPilot;
    }

    public Date getAirportDay() {
        return airportDay;
    }

    public void setAirportDay(Date airportDay) {
        this.airportDay = airportDay;
    }

    public Date getAirportNight() {
        return airportNight;
    }

    public void setAirportNight(Date airportNight) {
        this.airportNight = airportNight;
    }

    public Date getCrossingDay() {
        return crossingDay;
    }

    public void setCrossingDay(Date crossingDay) {
        this.crossingDay = crossingDay;
    }

    public Date getCrossingNight() {
        return crossingNight;
    }

    public void setCrossingNight(Date crossingNight) {
        this.crossingNight = crossingNight;
    }

    public int getLanding() {
        return landing;
    }

    public void setLanding(int landing) {
        this.landing = landing;
    }

    public Date getMultiMotor() {
        return multiMotor;
    }

    public void setMultiMotor(Date multiMotor) {
        this.multiMotor = multiMotor;
    }

    public Date getReactor() {
        return reactor;
    }

    public void setReactor(Date reactor) {
        this.reactor = reactor;
    }

    public Date getTurboPropeller() {
        return turboPropeller;
    }

    public void setTurboPropeller(Date turboPropeller) {
        this.turboPropeller = turboPropeller;
    }

    public Date getArialAplication() {
        return arialAplication;
    }

    public void setArialAplication(Date arialAplication) {
        this.arialAplication = arialAplication;
    }

    public Date getAreal() {
        return areal;
    }

    public void setAreal(Date areal) {
        this.areal = areal;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idLibro != null ? idLibro.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof LibroVueloPersistence)) {
            return false;
        }
        LibroVueloPersistence other = (LibroVueloPersistence) object;
        if ((this.idLibro == null && other.idLibro != null) || (this.idLibro != null && !this.idLibro.equals(other.idLibro))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "persistence.LibroVueloPersistence[ idLibro=" + idLibro + " ]";
    }
    
}
