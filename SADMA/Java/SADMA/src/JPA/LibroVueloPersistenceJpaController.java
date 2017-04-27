/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package JPA;

import JPA.exceptions.NonexistentEntityException;
import java.io.Serializable;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;
import javax.persistence.EntityNotFoundException;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import persistence.LibroVueloPersistence;

/**
 *
 * @author francisco
 */
public class LibroVueloPersistenceJpaController implements Serializable {

    public LibroVueloPersistenceJpaController(EntityManagerFactory emf) {
        this.emf = emf;
    }
    private EntityManagerFactory emf = null;

    public EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    public void create(LibroVueloPersistence libroVueloPersistence) {
        EntityManager em = null;
        try {
            em = getEntityManager();
            em.getTransaction().begin();
            em.persist(libroVueloPersistence);
            em.getTransaction().commit();
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }

    public void edit(LibroVueloPersistence libroVueloPersistence) throws NonexistentEntityException, Exception {
        EntityManager em = null;
        try {
            em = getEntityManager();
            em.getTransaction().begin();
            libroVueloPersistence = em.merge(libroVueloPersistence);
            em.getTransaction().commit();
        } catch (Exception ex) {
            String msg = ex.getLocalizedMessage();
            if (msg == null || msg.length() == 0) {
                Integer id = libroVueloPersistence.getIdLibro();
                if (findLibroVueloPersistence(id) == null) {
                    throw new NonexistentEntityException("The libroVueloPersistence with id " + id + " no longer exists.");
                }
            }
            throw ex;
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }

    public void destroy(Integer id) throws NonexistentEntityException {
        EntityManager em = null;
        try {
            em = getEntityManager();
            em.getTransaction().begin();
            LibroVueloPersistence libroVueloPersistence;
            try {
                libroVueloPersistence = em.getReference(LibroVueloPersistence.class, id);
                libroVueloPersistence.getIdLibro();
            } catch (EntityNotFoundException enfe) {
                throw new NonexistentEntityException("The libroVueloPersistence with id " + id + " no longer exists.", enfe);
            }
            em.remove(libroVueloPersistence);
            em.getTransaction().commit();
        } finally {
            if (em != null) {
                em.close();
            }
        }
    }

    public List<LibroVueloPersistence> findLibroVueloPersistenceEntities() {
        return findLibroVueloPersistenceEntities(true, -1, -1);
    }

    public List<LibroVueloPersistence> findLibroVueloPersistenceEntities(int maxResults, int firstResult) {
        return findLibroVueloPersistenceEntities(false, maxResults, firstResult);
    }

    private List<LibroVueloPersistence> findLibroVueloPersistenceEntities(boolean all, int maxResults, int firstResult) {
        EntityManager em = getEntityManager();
        try {
            CriteriaQuery cq = em.getCriteriaBuilder().createQuery();
            cq.select(cq.from(LibroVueloPersistence.class));
            Query q = em.createQuery(cq);
            if (!all) {
                q.setMaxResults(maxResults);
                q.setFirstResult(firstResult);
            }
            return q.getResultList();
        } finally {
            em.close();
        }
    }

    public LibroVueloPersistence findLibroVueloPersistence(Integer id) {
        EntityManager em = getEntityManager();
        try {
            return em.find(LibroVueloPersistence.class, id);
        } finally {
            em.close();
        }
    }

    public int getLibroVueloPersistenceCount() {
        EntityManager em = getEntityManager();
        try {
            CriteriaQuery cq = em.getCriteriaBuilder().createQuery();
            Root<LibroVueloPersistence> rt = cq.from(LibroVueloPersistence.class);
            cq.select(em.getCriteriaBuilder().count(rt));
            Query q = em.createQuery(cq);
            return ((Long) q.getSingleResult()).intValue();
        } finally {
            em.close();
        }
    }
    
}
