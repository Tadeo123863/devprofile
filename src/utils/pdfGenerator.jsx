import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, Link } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 40, fontFamily: 'Helvetica' },
  header: { flexDirection: 'row', marginBottom: 20, gap: 10 },
  photo: { width: 80, height: 80, borderRadius: 40 },
  name: { fontSize: 24, fontWeight: 'bold' },
  sectionTitle: { fontSize: 18, marginTop: 15, marginBottom: 8, borderBottomWidth: 1, borderBottomColor: '#333' },
  text: { fontSize: 10, marginBottom: 4 },
  link: { fontSize: 10, color: 'blue', textDecoration: 'underline' }
});

export const CVPDF = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        {data.personal.imagen && <Image src={data.personal.imagen} style={styles.photo} />}
        <View>
          <Text style={styles.name}>{data.personal.nombre || 'Sin nombre'}</Text>
          <Text>{data.personal.profesion}</Text>
          <Text>{data.personal.ubicacion} | {data.personal.email}</Text>
        </View>
      </View>
      <Text>{data.personal.descripcion}</Text>

      <Text style={styles.sectionTitle}>Habilidades</Text>
      {data.skills.map((s, i) => <Text key={i}>• {s.nombre} ({s.categoria}) - {s.nivel}</Text>)}

      <Text style={styles.sectionTitle}>Proyectos</Text>
      {data.projects.map((p, i) => (
        <View key={i}>
          <Text>{p.nombre} - {p.tecnologias}</Text>
          <Text>{p.descripcion}</Text>
          {p.repo && <Link src={p.repo} style={styles.link}>Repositorio</Link>}
        </View>
      ))}

      <Text style={styles.sectionTitle}>Educación</Text>
      {data.education.map((e, i) => <Text key={i}>• {e.programa} - {e.institucion} ({e.periodo})</Text>)}

      <Text style={styles.sectionTitle}>Experiencia</Text>
      {data.experience.map((e, i) => <Text key={i}>• {e.puesto} en {e.empresa} ({e.periodo})</Text>)}
    </Page>
  </Document>
);