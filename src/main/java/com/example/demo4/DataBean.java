package com.example.demo4;

import javax.enterprise.context.SessionScoped;
import javax.inject.Named;
import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Named
@SessionScoped
public class DataBean implements Serializable {
    private static final String persistenceUnit = "pointsDB";
    private Point point;
    private List<Point> points;
    private EntityManagerFactory entityManagerFactory;
    private EntityManager entityManager;
    private EntityTransaction transaction;

    public DataBean() {
        point = new Point();
        points = new ArrayList<>();
        initBD();

    }

    public Point getPoint() {
        return point;
    }

    public void setPoint(Point point) {
        this.point = point;
    }

    public void addPoint(){
        try {
            transaction.begin();
            point.isHit();
            entityManager.persist(point);
            points.add(point);
            point = new Point();
            transaction.commit();
            System.out.println("point added to the list ");
        } catch (RuntimeException e) {
            if(transaction.isActive()) transaction.rollback();
        }
    }
    public void removeAllPoints(){

    }

    public void setPoints(List<Point> points) {
        this.points = points;
    }

    public List<Point> getPoints() {
        return points;
    }

    public void loudPoints() {
        try {
            transaction.begin();
            Query query = entityManager.createQuery("SELECT e FROM Point e");
            points = query.getResultList();
            transaction.commit();
        }catch (RuntimeException e){
            if (transaction.isActive()) transaction.rollback();

        }

    }
    public String clearPoints(){
        try {
            transaction.begin();
            Query query = entityManager.createQuery("DELETE FROM Point ");
            query.executeUpdate();
            transaction.commit();
            points.clear();
            System.out.println("Все заебись");
            return "redirect";
        }catch (RuntimeException e){
            if(transaction.isActive()) transaction.rollback();
            throw e;
        }
    }

    private void initBD(){
        entityManagerFactory = Persistence.createEntityManagerFactory(persistenceUnit);
        entityManager = entityManagerFactory.createEntityManager();
        transaction = entityManager.getTransaction();
    }



}
